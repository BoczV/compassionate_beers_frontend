import React, { useState, useEffect } from "react";
import axios from "axios";
import BeerCard from "./BeerCard";
import "../style/Input.css";

function HomePage() {
  const [page, setPage] = useState(1);
  const [beers, setBeers] = useState([]);
  const [beerName, setBeerName] = useState(" ");
  const [foodName, setFoodName] = useState(" ");
  const [alcohol, setAlcohol] = useState(1);
  const [brewedBefore, setBrewedBefore] = useState("2020");
  const [brewedAfter, setBrewedAfter] = useState("1999");
  const [ibus, setIbus] = useState({
    "Berliner Weisse": [3, 8],
    "American Pilsner": [8, 15],
    "Cream Ale": [15, 20],
    "English Bitter": [25, 35],
    "English Special Bitter": [25, 40],
    "American Pale Ale": [30, 45],
    "English Indian": [40, 60],
    "American IPA": [40, 70],
    "Imperial IPA": [60, 100],
    "English Barleywine": [37, 70],
    "American Barleywine": [50, 100],
    "Brown Porter": [18, 35],
    "Robust Porter": [25, 50],
    "Dry Stout": [30, 45],
    "Foreign Export Stout": [30, 70],
    "Kölsch ": [20, 30],
    "Hefe-weizen": [8, 15],
    "Witbier ": [10, 20],
    "Belgian Tripel": [20, 40],
    "Bohemian Pilsner": [35, 45],
    "Octoberfest ": [20, 28],
    "Doppelbock ": [16, 26],
  });
  const [ebcs, setEbcs] = useState({
    "Pilsner ": [2, 7],
    "Berliner Weisse": [2, 4],
    "Belgian Strong Ale": [4, 7],
    "Maibock ": [4, 10],
    "Vienna Lager": [7, 14],
    "Oktoberfest ": [4, 12],
    "American Pale Ale": [6, 14],
    "Pale Ale": [5, 14],
    "English Golden Ale": [4, 8],
    "Bavarian Weizen": [4, 10],
    "Bitter,ESB": [8, 14],
    "Märzen ": [7, 15],
    "Imperial Pale Ale": [5, 11],
    "Bière de Garde": [6, 13],
    "Dunkel Weizen": [9, 13],
    "Amber Ale": [11, 18],
    "English Brown Ale": [12, 22],
    "Bock ": [15, 30],
    "Porter ": [20, 40],
    "Oatmeal Stout": [25, 40],
    "Baltic Porter": [17, 40],
    "Foreign Stout": [30, 65],
    "Imperial Stout": [50, 80],
  });

  useEffect(() => {
    const url = `http://localhost:8762/beerservice/beer/all/${page}`;
    axios.get(url).then((data) => {
      setBeers(data.data);
    });
  }, [page]);

  const checkSearch = () => {
    let counter = false;
    if (brewedBefore.length === 0) {
      setBrewedBefore("2020");
      axiosSend(page, beerName, foodName, alcohol, "2020", brewedAfter);
      counter = true;
    }
    if (brewedAfter.length === 0) {
      setBrewedAfter("1990");
      axiosSend(page, beerName, foodName, alcohol, brewedBefore, "1990");
      counter = true;
    }
    if (beerName.length === 0) {
      setBeerName(" ");
      axiosSend(page, " ", foodName, alcohol, brewedBefore, brewedAfter);
      counter = true;
    }
    if (foodName.length === 0) {
      setFoodName(" ");
      axiosSend(page, beerName, " ", alcohol, brewedBefore, brewedAfter);
      counter = true;
    }
    if (alcohol.length === 0) {
      setAlcohol(" ");
      axiosSend(page, beerName, foodName, "1", brewedBefore, brewedAfter);
      counter = true;
    }
    if (!counter) {
      axiosSend(page, beerName, foodName, alcohol, brewedBefore, brewedAfter);
    }
  };

  const axiosSend = (
    actualPage,
    actualBeerName,
    actualFoodName,
    actualAlcohol,
    actualBrewedBefore,
    actualBrewedAfter
  ) => {
    const url = `http://localhost:8762/beerservice/beer/search/${actualPage}/${actualBeerName}/${actualFoodName}/${actualAlcohol}/01-${actualBrewedBefore}/01-${actualBrewedAfter}`;
    axios.get(url).then((data) => {
      setBeers(data.data);
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Beer"
          onChange={(e) => setBeerName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Food"
          onChange={(e) => setFoodName(e.target.value)}
        />
        <input
          type="number"
          min="1999"
          max="2020"
          step="1"
          placeholder="Brewed after"
          onChange={(e) => setBrewedAfter(e.target.value)}
        />
        <input
          type="number"
          min="1999"
          max="2020"
          step="1"
          placeholder="Brewed before"
          onChange={(e) => setBrewedBefore(e.target.value)}
        />

        <input
          type="number"
          min="0"
          max="67.5"
          step="0.5"
          placeholder="Alcohol %"
          onChange={(e) => setAlcohol(e.target.value)}
        />
        {/* <select
          onChange={(e) => console.log(e.target.value, e.target.value[0])}
        >
          {Object.entries(ibus).map(([key, value]) => (
            <option value={value}>{key}</option>
          ))}
        </select>
        <select onChange={(e) => console.log(e.target.value)}>
          {Object.entries(ebcs).map(([key, value]) => (
            <option value={value}>{key}</option>
          ))}
        </select> */}
        <button onClick={() => checkSearch()}>Filter</button>
      </div>
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
