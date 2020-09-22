import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

function DetailedBeer() {
  const { beerId } = useParams();

  useEffect(() => {
    const url = `http://localhost:8762/beerservice/beer/${beerId}`;
    axios.get(url).then((data) => {
      console.log(data.data);
    });
  }, [beerId]);
  return <div></div>;
}

export default DetailedBeer;
