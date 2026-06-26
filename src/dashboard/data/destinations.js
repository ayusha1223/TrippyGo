import pokhara from "../../assets/images/pokhara.jpg";
import mustang from "../../assets/images/everest.jpg";
import chitwan from "../../assets/images/chitwan.jpg";
import langtang from "../../assets/images/hero-banner.jpg";

const destinations = [
  {
    id: 1,
    name: "Pokhara",
    image: pokhara,
    rating: 4.9,
    description: "Gateway to Annapurna",
    tags: ["TREKKING", "LAKES"],
  },

  {
    id: 2,
    name: "Mustang",
    image: mustang,
    rating: 4.8,
    description: "Hidden Forbidden Kingdom",
    tags: ["DESERT", "CULTURE"],
  },

  {
    id: 3,
    name: "Chitwan",
    image: chitwan,
    rating: 4.7,
    description: "Wildlife Safari Adventure",
    tags: ["SAFARI", "JUNGLE"],
  },

  {
    id: 4,
    name: "Langtang",
    image: langtang,
    rating: 4.9,
    description: "The Valley of Glaciers",
    tags: ["TREKKING", "SNOW"],
  },
];

export default destinations;