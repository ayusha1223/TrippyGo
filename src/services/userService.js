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
| USER PROFILE
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

/*
|--------------------------------------------------------------------------
| FAVORITES
|--------------------------------------------------------------------------
*/

// Get all favorite destinations
export async function getFavorites() {
  const response = await fetch(`${API}/favorites`, {
    headers: authHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch favorites");
  }

  return await response.json();
}

// Add favorite
export async function addFavorite(destinationId) {
  const response = await fetch(
    `${API}/favorites/${destinationId}`,
    {
      method: "POST",
      headers: authHeaders(),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to add favorite");
  }

  return await response.json();
}

// Remove favorite
export async function removeFavorite(destinationId) {
  const response = await fetch(
    `${API}/favorites/${destinationId}`,
    {
      method: "DELETE",
      headers: authHeaders(),
    }
  );

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

// Get saved destinations
export async function getSavedDestinations() {
  const response = await fetch(`${API}/saved`, {
    headers: authHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch saved destinations");
  }

  return await response.json();
}

// Save destination
export async function saveDestination(destinationId) {
  const response = await fetch(
    `${API}/saved/${destinationId}`,
    {
      method: "POST",
      headers: authHeaders(),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to save destination");
  }

  return await response.json();
}

// Remove saved destination
export async function removeSavedDestination(destinationId) {
  const response = await fetch(
    `${API}/saved/${destinationId}`,
    {
      method: "DELETE",
      headers: authHeaders(),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to remove saved destination");
  }

  return await response.json();
}