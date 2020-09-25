import Axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "../style/TableCard.css";
/*Axios.defaults.headers.common["Authorization"] = `${
  document.cookie.split("=")[1]
}`;*/
import { useCookies } from "react-cookie";

function BeerCard({ beer }) {
  const [cookies, setCookie, removeCookie] = useCookies();

  const addAsFavorite = () => {
    const url = `http://localhost:8762/favorites/save`;
    console.log(`Bearer ${cookies["auth"]}`);
    Axios({
      method: "post",
      url: url,
      headers: { Authorization: `Bearer ${cookies["auth"]}` },
      data: {
        alcohol: beer.abv,
        name: beer.name,
        id: beer.id,
        brewedDate: beer.first_brewed,
        img: beer.image_url,
        username: localStorage.getItem("username"),
      },
    }).catch((e) => {
      console.log(e);
    });
  };

  return (
    <div>
      <div className="weather-card one">
        <Link to={`/beer/${beer.id}`}>
          <div
            className="top"
            style={{
              backgroundImage: `url(${beer.image_url})`,
              backgroundSize: "160px 420px",
              backgroundPosition: "center center",
            }}
          >
            <div className="wrapper">
              <p className="heading">{beer.name}</p>
              <div className="pushtobottom">
                <ul className="forecast">
                  <li className="active">
                    <span className="date">Brewed: {beer.first_brewed}</span>
                  </li>
                  <li className="active">
                    <span className="date">Alcohol ratio: {beer.abv}%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Link>
        <div className="bottom">
          <div className="wrapper">
            <button className="hello" onClick={() => addAsFavorite()}>
              + Add as favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeerCard;
