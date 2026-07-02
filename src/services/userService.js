const API = "http://localhost:5000/api/users";

function getToken() {
  return localStorage.getItem("token");
}

function authHeaders() {
  return {
    Authorization: `Bearer ${getToken()}`,
    "Content-Type": "application/json",
  };
}

/*
|--------------------------------------------------------------------------
| PROFILE
|--------------------------------------------------------------------------
*/

export async function getProfile() {
  const response = await fetch(`${API}/profile`, {
    headers: authHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch profile");
  }

  return await response.json();
}

export async function updateProfile(profile) {
  const response = await fetch(`${API}/profile`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify(profile),
  });

  if (!response.ok) {
    throw new Error("Failed to update profile");
  }

  return await response.json();
}

/*
|--------------------------------------------------------------------------
| FAVORITES
|--------------------------------------------------------------------------
*/

export async function getFavorites() {
  const response = await fetch(`${API}/favorites`, {
    headers: authHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch favorites");
  }

  return await response.json();
}

export async function addFavorite(id) {
  const response = await fetch(`${API}/favorites/${id}`, {
    method: "POST",
    headers: authHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to add favorite");
  }

  return await response.json();
}

export async function removeFavorite(id) {
  const response = await fetch(`${API}/favorites/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to remove favorite");
  }

  return await response.json();
}

/*
|--------------------------------------------------------------------------
| SAVED DESTINATIONS
|--------------------------------------------------------------------------
*/

export async function getSavedDestinations() {
  const response = await fetch(`${API}/saved`, {
    headers: authHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch saved destinations");
  }

  return await response.json();
}

export async function saveDestination(id) {
  const response = await fetch(`${API}/saved/${id}`, {
    method: "POST",
    headers: authHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to save destination");
  }

  return await response.json();
}

export async function removeSavedDestination(id) {
  const response = await fetch(`${API}/saved/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to remove saved destination");
  }

  return await response.json();
}