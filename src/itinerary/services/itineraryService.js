const API = "http://localhost:5000/api/itineraries";

// Get all itineraries
export async function getItineraries() {
  const response = await fetch(API);

  if (!response.ok) {
    throw new Error("Failed to fetch itineraries");
  }

  return await response.json();
}

// Save itinerary
export async function saveItinerary(itinerary) {
  const response = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
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
  });

  if (!response.ok) {
    throw new Error("Failed to delete itinerary");
  }

  return await response.json();
}