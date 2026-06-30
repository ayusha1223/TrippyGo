const API = "http://localhost:5000/api/ai";

export async function generateItinerary(data) {
  const response = await fetch(`${API}/generate-itinerary`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to generate itinerary");
  }

  const result = await response.json();

  return JSON.parse(result.itinerary);
}