# Registration failing in production (2026-11-03)

## Summary

Registering on TrippyGo failed in production. The frontend's API requests never reached a working backend. Five separate problems were stacked on top of each other: a wrong URL, stale routing, a missing image, an unreachable port and missing environment variables. Each fix uncovered the next one. Registration now works on `https://trippygo.safefamilyapp.com`.

## How a request flows (after the fix)

```
Browser
  └─> Cloudflare (trippygo.safefamilyapp.com)
        └─> host nginx on the VM (TLS, /etc/nginx/sites-available/trippygo)
              ├─ /api/*  ─> <kind-node-ip>:30082 ─> trippygo-backend-service ─> backend pods :5001 ─> mongodb:27017
              └─ /*      ─> <kind-node-ip>:30081 ─> trippygo-frontend-service ─> frontend pods :80 (static React build)
```

The frontend calls relative paths such as `/api/auth/register` and has no backend URL of its own. Routing `/api` to the backend is the job of the **host nginx**. The nginx inside the frontend image only serves static files.

Kubernetes runs on **kind**, so the cluster's nodes are Docker containers. NodePorts are reachable from the VM on the kind node's Docker IP. They are only reachable on `127.0.0.1` if the port is listed in `extraPortMappings` in `kind-config.yaml`.

## What went wrong and how it was fixed

### 1. `405 Not Allowed` on `POST /api/auth/register`

**Symptom**
```
POST http://64.227.173.254:30081/api/auth/register 405 (Not Allowed)
```

**Cause:** the app was opened on the frontend NodePort (`:30081`) directly, which skips the host nginx. The frontend container's nginx has no `/api` route. It treated the POST as a request for a static file and rejected it.

**Fix:** use the domain, `https://trippygo.safefamilyapp.com`, so requests go through the host nginx. Don't use `:30081` for testing the app.

### 2. Host nginx was sending traffic to the old docker-compose containers

**Symptom:** the domain served a frontend build dated Oct 7. `127.0.0.1:5001` and `127.0.0.1:8084` answered, but not from Kubernetes.

**Cause:** the host nginx `proxy_pass` lines still pointed at `127.0.0.1:5001` (backend) and `127.0.0.1:8084` (frontend). Those were containers from the old docker-compose setup, not the Kubernetes services.

**Fix:** point the host nginx at the Kubernetes NodePorts (final values in item 4).

### 3. Backend pods stuck in `ErrImagePull` / `ImagePullBackOff`

**Cause:** there were two problems:
- The deployment referenced `trippygo_backend:latest`, which didn't exist. The local image is named `trippy-go_backend:latest`.
- kind nodes have their own image store and can't see the VM's local Docker images. With `imagePullPolicy: IfNotPresent` and the image missing on the node, Kubernetes tried to pull it from Docker Hub and failed.

**Fix:**
```bash
# backend-deployment.yaml -> image: trippy-go_backend:latest
kind load docker-image trippy-go_backend:latest --name <cluster-name>
kubectl apply -f backend-deployment.yaml
```

### 4. Cloudflare `502 Bad Gateway`

**Symptom:** Cloudflare showed `origin_bad_gateway`. From the VM, this failed:
```
curl http://127.0.0.1:30082/...  ->  Failed to connect ... Couldn't connect to server
```

**Cause:** the backend Service was changed from `ClusterIP` to `NodePort` (`5001:30082`). But the kind cluster wasn't created with a port mapping for 30082, so nothing on the VM listened on `127.0.0.1:30082`. The host nginx couldn't connect and returned 502.

**Fix:** point the host nginx at the kind node's Docker IP, which the VM can reach directly:
```bash
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <cluster-name>-control-plane
```
```nginx
location /api/ { proxy_pass http://<kind-node-ip>:30082; ... }
location /     { proxy_pass http://<kind-node-ip>:30081; ... }
```
```bash
sudo nginx -t && sudo systemctl reload nginx
```

**Related:** `systemctl` reported `Failed to allocate directory watch: Too many open files`. The VM had run out of inotify instances, which kind and the monitoring stack (Grafana, Loki, Alloy, cAdvisor) use heavily. The limits were raised:
```bash
sudo sysctl -w fs.inotify.max_user_watches=524288
sudo sysctl -w fs.inotify.max_user_instances=512
# persisted in /etc/sysctl.d/99-inotify.conf
```

### 5. `{"message": "secretOrPrivateKey must have a value"}`

**Cause:** the backend signs login tokens with `JWT_SECRET`. Under docker-compose, it got its variables from `TrippyGoBackend/.env`. The Kubernetes deployment only set `GROQ_API_KEY` and `MONGO_URI`, so `JWT_SECRET` and the Cloudinary variables were undefined.

**Fix:** load the whole `.env` into the Kubernetes Secret, and have the deployment read every variable from it:
```bash
kubectl create secret generic trippygo-secret \
  --from-env-file=../TrippyGoBackend/.env \
  --dry-run=client -o yaml | kubectl apply -f -
```
```yaml
          envFrom:
            - secretRef:
                name: trippygo-secret
          env:
            - name: MONGO_URI              # overrides .env, which uses the compose host "mongo"
              value: "mongodb://mongodb:27017/trippygo"
```
```bash
kubectl apply -f backend-deployment.yaml
kubectl rollout status deployment trippygo-backend
```

## Day-to-day operations

**Change a backend environment variable:** edit `TrippyGoBackend/.env`, rerun the `kubectl create secret ... | kubectl apply -f -` command above, then run `kubectl rollout restart deployment trippygo-backend`.

**Deploy new backend code:**
```bash
docker build -t trippy-go_backend:latest <backend-dir>
kind load docker-image trippy-go_backend:latest --name <cluster-name>
kubectl rollout restart deployment trippygo-backend
```

**Deploy new frontend code:** push to `main` and wait for GitHub Actions to pass. CI builds and pushes `ayusha1009/trippygo-frontend:latest`. Then run `kubectl rollout restart deployment <frontend-deployment>`.

**Quick health checks from the VM:**
```bash
kubectl get pods
curl -I http://<kind-node-ip>:30081
curl -i -X POST http://<kind-node-ip>:30082/api/auth/register -H "Content-Type: application/json" -d '{}'
sudo tail -n 30 /var/log/nginx/error.log
```

## Follow-ups

- [ ] **Rotate secrets.** The Groq API key, Cloudinary API secret and `JWT_SECRET` were shared in plain text while debugging. Make sure `.env` is in the backend's `.gitignore`.
- [ ] **Make the NodePorts stable.** The kind node IP can change when Docker or the VM restarts, which brings the 502 back. Add `extraPortMappings` for 30081 and 30082 (`listenAddress: "127.0.0.1"`) to `kind-config.yaml`, then point the host nginx at `127.0.0.1`. This means recreating the cluster, which **deletes the MongoDB data**, so back it up first.
- [ ] **Validate input in the backend.** `POST /api/auth/register` with a missing password returns a 500 (`Illegal arguments: undefined, number` from bcrypt) instead of a 400.
- [ ] **Set the Cloudinary cloud name.** `CLOUDINARY_CLOUD_NAME=CLOUDINARY` looks like a placeholder, so image uploads will likely fail.
- [ ] **Stop the old docker-compose containers** that are still on ports 5001 and 8084.
- [ ] **Add an SPA fallback to the frontend image's nginx** (`try_files $uri /index.html`). Without it, refreshing a page like `/dashboard` returns 404.
- [ ] **Clean up the frontend code.** `authService.loginUser` stores the token under `"user"`, while every other service reads `"token"`. There are also two `destinationService.js` files.
