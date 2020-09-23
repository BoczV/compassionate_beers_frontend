import React, { useState, useEffect } from "react";
import "../style/DetailedBeer.css";
import { useParams } from "react-router";
import axios from "axios";

export default function MyProfile() {
  //const [cookies, setCookie, removeCookie] = useCookies(["auth"]);
  //const [profileData, setProfileData] = useState([]);

  const { beerId } = useParams();
  const [detailedBeer, setDetailedBeer] = useState({});

  useEffect(() => {
    const url = `http://localhost:8762/beerservice/beer/${beerId}`;
    axios.get(url).then((data) => {
      console.log(data.data);
      setDetailedBeer(data.data);
    });
  }, [beerId]);

  return (
    <div className="body-container">
      <aside class="profile-card">
        <header>
          <a href="#">
            <img src={`${detailedBeer.img_url}`} />
          </a>

          <h1>"username"</h1>

          <h2>"email"</h2>
        </header>

        <div class="profile-bio">
          <p>
            Under construction... <br /> Please come back later!
          </p>
        </div>
      </aside>
    </div>
  );
}
