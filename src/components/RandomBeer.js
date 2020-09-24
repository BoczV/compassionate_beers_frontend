import Axios from "axios";
import React, { useState, useEffect } from "react";
import BeerCard from "./BeerCard";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    const url = `http://localhost:8762/beerservice/beer/random`;

    Axios.get(url).then((data) => {
      setRandomBeer(data.data[0]);
    });
  }, []);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, max-content))",
        justifyContent: "center",
        gridGap: "2rem",
        marginTop: "5%",
      }}
    >
      <BeerCard beer={randomBeer} />
    </div>
  );
}

export default RandomBeer;
