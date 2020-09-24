import React, { useState, useEffect } from "react";
import "../style/DetailedBeer.css";
import { useParams } from "react-router";
import axios from "axios";

export default function MyProfile() {
  //const [cookies, setCookie, removeCookie] = useCookies(["auth"]);
  //const [profileData, setProfileData] = useState([]);

  const { beerId } = useParams();
  const [detailedBeer, setDetailedBeer] = useState({});
  const [hops, setHops] = useState([]);
  const [malts, setMalts] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const url = `http://localhost:8762/beerservice/beer/${beerId}`;
    axios.get(url).then((data) => {
      console.log(data.data);
      setDetailedBeer(data.data);
      setHops(data.data.hops);
      setMalts(data.data.malts);
      setFoods(data.data.foodPairing);
    });
  }, [beerId]);

  return (
    <div className="body-container">
      <aside class="profile-card">
        <header>
          <a href="/">
            <img src={`${detailedBeer.img_url}`} />
          </a>

          <h1>{detailedBeer.name}</h1>

          <h2>{detailedBeer.tagline}</h2>

          <h3>{detailedBeer.description}</h3>
        </header>

        <div class="profile-bio">
          <div class="profile-bio-element">
            <p class="list-first-column">Yeast:</p>
            <p class="list-second-column">{detailedBeer.yeast}</p>
          </div>
          <div class="profile-bio-element">
            <p class="list-first-column">First brewed:</p>
            <p class="list-second-column">{detailedBeer.first_brewed}</p>
          </div>
          <div class="profile-bio-element">
            <p class="list-first-column">Alcohol ratio:</p>
            <p class="list-second-column">{detailedBeer.alcohol_ratio}</p>
          </div>
          <div class="profile-bio-element">
            <p class="list-first-column">Food pairing:</p>

            <p class="list-second-column">{foods[0]}</p>
            {foods.slice(1, foods.size).map((food) => (
              <p class="list-second-column2">{food}</p>
            ))}
          </div>
          <h2 class="hops">HOPS</h2>
          <div class="profile-bio-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Unit</th>
                  <th>Add</th>
                  <th>Attribute</th>
                </tr>
              </thead>
              <tbody>
                {hops.map((hop) => (
                  <tr>
                    <td>{hop.name}</td>
                    <td>{hop.amount}</td>
                    <td>{hop.unit}</td>
                    <td>{hop.add}</td>
                    <td>{hop.attribute}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2 class="hops">MALTS</h2>
          <div class="profile-bio-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Unit</th>
                </tr>
              </thead>
              <tbody>
                {malts.map((malt) => (
                  <tr>
                    <td>{malt.name}</td>
                    <td>{malt.amount}</td>
                    <td>{malt.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </aside>
    </div>
  );
}
