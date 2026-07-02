import { useEffect, useState } from "react";

import AdventureCard from "./AdventureCard";
import { getAdventures } from "../services/adventureService";

export default function AdventureGrid({
  search,
  category,
}) {
  const [adventures, setAdventures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAdventures() {
      try {
        const data = await getAdventures();
        setAdventures(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadAdventures();
  }, []);

  if (loading) {
    return (
      <h1 className="text-3xl font-bold">
        Loading Adventures...
      </h1>
    );
  }

  // Search Filter
 const filteredAdventures = adventures.filter((adventure) => {

  const matchesSearch =
    adventure.title
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    adventure.location
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    adventure.category
      .toLowerCase()
      .includes(search.toLowerCase());

  const matchesCategory =
    category === "All" ||
    adventure.category
      .toLowerCase()
      .includes(category.toLowerCase());

  return matchesSearch && matchesCategory;
});

  return (
    <>
      <h1 className="text-4xl font-bold text-[#1A5F7A] mb-8">
        Adventures in Nepal
      </h1>

      {filteredAdventures.length === 0 ? (
        <div className="bg-white rounded-3xl shadow-md p-16 text-center">
          <h2 className="text-2xl font-bold">
            No Adventures Found
          </h2>

          <p className="text-gray-500 mt-3">
            Try searching with another keyword.
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {filteredAdventures.map((adventure) => (
            <AdventureCard
              key={adventure._id}
              adventure={adventure}
            />
          ))}
        </div>
      )}
    </>
  );
}