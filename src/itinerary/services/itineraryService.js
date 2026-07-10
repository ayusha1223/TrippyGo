const API = "http://localhost:5001/api/itineraries";

function getToken() {
  return localStorage.getItem("token");
}

function authHeaders() {
  return {
    Authorization: `Bearer ${getToken()}`,
    "Content-Type": "application/json",
  };
}

// Get all itineraries
export async function getItineraries() {
  const response = await fetch(API, {
    headers: authHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch itineraries");
  }

  return await response.json();
}

// Save itinerary
export async function saveItinerary(itinerary) {
  const response = await fetch(API, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(itinerary),
  });

  if (!response.ok) {
    throw new Error("Failed to save itinerary");
  }

  return await response.json();
}

// Delete itinerary
export async function deleteItinerary(id) {
  const response = await fetch(`${API}/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to delete itinerary");
  }

  return await response.json();
}