
export async function getDestinationById(id) {
  const response = await fetch(
    `http://localhost:5000/api/destinations/${id}`
  );

  if (!response.ok) {
    throw new Error("Destination not found");
  }

  return response.json();
}

