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
export async function deleteSavedItem(id) {
  const response = await fetch(
    `${ITEM_API}/${id}`,
    {
      method: "DELETE",
      headers: authHeaders(),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete item");
  }

  return await response.json();
}


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

const ITEM_API = "http://localhost:5000/api/items";

// Get all saved/favorite items
export async function getSavedItems() {
  const response = await fetch(ITEM_API, {
    headers: authHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch saved items");
  }

  return await response.json();
}

// Toggle Favorite
export async function toggleFavorite(data) {
  const response = await fetch(`${ITEM_API}/favorite`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update favorite");
  }

  return await response.json();
}

// Toggle Save
export async function toggleSave(data) {
  const response = await fetch(`${ITEM_API}/save`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update save");
  }

  return await response.json();
}