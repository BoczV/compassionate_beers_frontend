import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "../style/WeekCard.scss";

function DetailedBeer() {
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
    <div>
      <div
        class="container_w"
        style={{
          backgroundImage: `url("https://i.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc")`,
          marginTop: "4%",
        }}
      >
        <div className="card_w" style={{ marginTop: "5%" }}>
          <div className="today_w">
            <div className="conditions_w">
              <div className="temp_w">
                <p>{detailedBeer.name}</p>
                <p>{detailedBeer.description}</p>
              </div>
              <div className="currentCond_w">
                <p>
                  <span className="tags_w">Wind:</span>
                </p>
                <p>
                  <span className="tags_w" style={{ marginLeft: "130%" }}>
                    Direction:
                  </span>
                </p>
                <p style={{ verticalAlign: "middle" }}></p>
              </div>
              <div className="currentCond_w">
                <p>
                  <span className="tags_w">Wind:</span>
                </p>
                <p>
                  <span className="tags_w" style={{ marginLeft: "130%" }}>
                    Direction:
                  </span>
                </p>
                <p style={{ verticalAlign: "middle" }}></p>
              </div>
              <div className="currentCond_w">
                <p>
                  <span className="tags_w">Wind:</span>
                </p>
                <p>
                  <span className="tags_w" style={{ marginLeft: "130%" }}>
                    Direction:
                  </span>
                </p>
                <p style={{ verticalAlign: "middle" }}></p>
              </div>
            </div>
            <div className="location_w">
              {
                <img
                  src={`${detailedBeer.img_url}`}
                  alt=""
                  width="auto"
                  height="50%"
                />
              }
            </div>
          </div>
          <div className="forcast_w"></div>
        </div>
      </div>
    </div>
  );
}

export default DetailedBeer;
