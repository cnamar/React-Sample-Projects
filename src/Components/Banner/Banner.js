import React, { useEffect, useState } from "react";
import axios from "../../config/config";
import { API_KEY, imageurl } from "../../Constants/Constants";
import "./Banner.css";
function Banner() {
  const [series, setSeries] = useState();
  const [array, setArray] = useState();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`trending/tv/week?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        console.log("calling...");
        setArray(res.data.results);
      });
  }, []);
  useEffect(() => {
    if (array) {
      setSeries(array[index]);
      //console.log(index);
      const interval = setInterval(() => {
        if (index === 19) {
          setIndex(0);
        } else {
          setIndex(index + 1);
        }

        console.log("triggered");
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [array, index]);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: series
          ? `url(${imageurl + series.backdrop_path})`
          : null,
      }}
    >
      <div className="content">
        <div className="moviename">{series ? series.name : null}</div>
        <div className="buttons">
          <button className="button">Play</button>
          <button className="button">Add to List</button>
        </div>
        <h1 className="description">{series ? series.overview : null}</h1>
      </div>
      <div className="shade"></div>
    </div>
  );
}

export default Banner;
