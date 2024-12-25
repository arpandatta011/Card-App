import React, { useState, useEffect } from "react";
import axios from "axios";
import BeerCard from "../components/BeerCard";

const Home = () => {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://api.sampleapis.com/beers/ale")
      .then((response) => setBeers(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Beer Cards</h1>
      <input
        type="text"
        placeholder="Search Beers..."
        value={search}
        onChange={handleSearch}
      />
      <div className="beer-cards">
        {filteredBeers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default Home;
