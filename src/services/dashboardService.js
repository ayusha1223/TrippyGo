const API = "http://localhost:5001/api/dashboard";

function getToken() {
  return localStorage.getItem("token");
}

function authHeaders() {
  return {
    Authorization: `Bearer ${getToken()}`,
    "Content-Type": "application/json",
  };
}

export async function getDashboardStats() {
  const response = await fetch(`${API}/stats`, {
    headers: authHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch dashboard stats");
  }

  return await response.json();
}