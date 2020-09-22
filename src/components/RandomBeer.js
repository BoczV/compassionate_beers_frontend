import Axios from "axios";
import React, { useState, useEffect } from "react";
import BeerCard from "./BeerCard";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    const url = `http://localhost:8762/beerservice/beer/random`;

    Axios.get(url).then((data) => {
      setRandomBeer(data.data);
    });
  }, []);
  return (
    <div>
      <BeerCard beer={randomBeer} />
    </div>
  );
}

export default RandomBeer;
