import Axios from "axios";
import React, { useState, useEffect } from "react";
import BeerCard from "./BeerCard";

function Profile() {
  const [user, setUser] = useState({});
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const url = `http://localhost:8762/profile/${localStorage.getItem(
      "username"
    )}`;
    const url2 = `http://localhost:8762/favorites/get-beers/${localStorage.getItem(
      "username"
    )}`;
    Axios.get(url).then((data) => {
      console.log(data.data);
      setUser(data.data);
    });
    Axios.get(url2).then((data) => {
      console.log(data.data);
      setBeers(data.data);
    });
  }, []);

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          display: "block",
          marginBottom: "-1.5%",
        }}
      >
        {user.userName}'s profile
      </h1>
      <p style={{ color: "#002e5b", marginBottom: "2%" }}>
        E-mail address: {user.email}
      </p>
      <h2 style={{ color: "#002e5b" }}>My favorite beers:</h2>
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
    </div>
  );
}

export default Profile;
