import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BeerCard from "./BeerCard";

function HomePage() {
  const [page, setPage] = useState(1);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const url = `http://localhost:8762/beerservice/beer/all/${page}`;
    axios.get(url).then((data) => {
      setBeers(data.data);
    });
  }, [page]);
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, max-content))",
          justifyContent: "center",
          gridGap: "2rem",
          marginTop: "5%",
        }}
      >
        {beers.map((beer) => (
          <BeerCard beer={beer} />
        ))}
      </div>
      <div className="buttons">
        <button
          className="hello"
          onClick={() => setPage(page - 1)}
          disabled={page === 1 ? true : false}
        >
          Previous
        </button>
        <button className="hello" onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default HomePage;
