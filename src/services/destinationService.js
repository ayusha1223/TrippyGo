
const API_URL = "http://localhost:5000/api/destinations";

// Get all destinations
export async function getDestinations() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch destinations");
  }

  return await response.json();
}

// Get one destination by ID
export async function getDestinationById(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch destination");
  }

  return await response.json();
}

