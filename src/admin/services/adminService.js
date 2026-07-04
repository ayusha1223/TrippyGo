const API = "http://localhost:5000/api/admin";

function getToken() {
  return localStorage.getItem("token");
}
/*
|--------------------------------------------------------------------------
| DELETE DESTINATION
|--------------------------------------------------------------------------
*/

export async function deleteDestination(id) {
  const response = await fetch(
    `${API}/destinations/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete destination");
  }

  return await response.json();
}

/*
|--------------------------------------------------------------------------
| GET SINGLE DESTINATION
|--------------------------------------------------------------------------
*/

export async function getDestination(id) {

  const response = await fetch(
    `${API}/destinations/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch destination");
  }

  return await response.json();

}
/*
|--------------------------------------------------------------------------
| UPDATE DESTINATION
|--------------------------------------------------------------------------
*/

export async function updateDestination(id, data) {

  const response = await fetch(
    `${API}/destinations/${id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update destination");
  }

  return await response.json();

}
/*
|--------------------------------------------------------------------------
| GET ALL USERS
|--------------------------------------------------------------------------
*/

export async function getUsers() {

  const response = await fetch(
    `${API}/users`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return await response.json();

}
/*
|--------------------------------------------------------------------------
| CREATE USER
|--------------------------------------------------------------------------
*/

export async function createUser(data) {

  const response = await fetch(
    `${API}/users`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {

    const error = await response.json();

    throw new Error(error.message);

  }

  return await response.json();

}
/*
|--------------------------------------------------------------------------
| DELETE USER
|--------------------------------------------------------------------------
*/

export async function deleteUser(id) {

  const response = await fetch(
    `${API}/users/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete user");
  }

  return await response.json();

}
/*
|--------------------------------------------------------------------------
| UPDATE USER
|--------------------------------------------------------------------------
*/

export async function updateUser(id, data) {

  const response = await fetch(
    `${API}/users/${id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {

    const error = await response.json();

    throw new Error(error.message);

  }

  return await response.json();

}
/*
|--------------------------------------------------------------------------
| GET ALL ITINERARIES
|--------------------------------------------------------------------------
*/

export async function getItineraries() {

  const response = await fetch(
    `${API}/itineraries`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch itineraries");
  }

  return await response.json();

}
/*
|--------------------------------------------------------------------------
| DELETE ITINERARY
|--------------------------------------------------------------------------
*/

export async function deleteItinerary(id) {

  const response = await fetch(
    `${API}/itineraries/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  if (!response.ok) {

    const error = await response.json();

    throw new Error(error.message);

  }

  return await response.json();

}
/*
|--------------------------------------------------------------------------
| GET SINGLE ITINERARY
|--------------------------------------------------------------------------
*/

export async function getItinerary(id) {

  const response = await fetch(
    `${API}/itineraries/${id}`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  if (!response.ok) {

    const error = await response.json();

    throw new Error(error.message);

  }

  return await response.json();

}
/*
|--------------------------------------------------------------------------
| GET SINGLE USER
|--------------------------------------------------------------------------
*/

export async function getUser(id) {

  const response = await fetch(
    `${API}/users/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  return await response.json();

}
/*
|--------------------------------------------------------------------------
| CREATE DESTINATION
|--------------------------------------------------------------------------
*/

export async function createDestination(formData) {

  const response = await fetch(
    "http://localhost:5000/api/admin/destinations",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create destination");
  }

  return await response.json();

}
export async function getDashboardStats() {
  const response = await fetch(`${API}/dashboard`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch dashboard");
  }

  return await response.json();
}