import React from "react";
import { Link } from "react-router-dom";
import "../style/TableCard.css";

function BeerCard({ beer }) {
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
            <button className="hello">+ Add as favorite</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeerCard;
