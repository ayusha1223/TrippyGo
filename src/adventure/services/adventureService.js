const API = "http://localhost:5000/api/adventures";

// Get all adventures
export async function getAdventures() {
  const response = await fetch(API);

  if (!response.ok) {
    throw new Error("Failed to fetch adventures");
  }

  return await response.json();
}

// Get adventure by id
export async function getAdventureById(id) {
  const response = await fetch(`${API}/${id}`);

  if (!response.ok) {
    throw new Error("Adventure not found");
  }

  return await response.json();
}