// src/pages/Beers.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchBeers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.punkapi.com/v2/beers?page=${page}&per_page=9`
      );
      setBeers((prevBeers) => [...prevBeers, ...response.data]);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBeers();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 font-sans">
        {beers.map((beer) => (
          <div key={beer.id} className="bg-violet-100 p-4 rounded shadow cursor-pointer font-sans">
           
            <h1 className="text-xl font-bold">{beer.name}</h1>
            <h2 className="text-lg font-semibold">{beer.tagline}</h2>
            <h4 className="text-gray-500">{beer.first_brewed}</h4>
            <p className="mt-2">{beer.description}</p>
            {/* Display other beer information */}
          </div>
        ))}
      </div>
      <h1 className="font-sans text-2xl font-bold text-center p-6">
      {loading && <p>Loading...</p>}
      </h1>
    </div>
  );
};

export default Beers;
