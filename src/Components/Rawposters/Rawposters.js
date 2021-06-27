import React, { useEffect, useState } from "react";
import axios from "../../config/config";
import { API_KEY, imageurl } from "../../Constants/Constants";
import Youtube from "react-youtube";
import "./Rawposters.css";
function Rawposters(props) {
  const [all, setAll] = useState([]);
  const [youtubeId, setyoutubeId] = useState("");
  const [currentId, setcurrentId] = useState();
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setAll(response.data.results);
        console.log(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const videomovie = (movieId) => {
    axios
      .get(`movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setyoutubeId(response.data.results[0].key);
        setcurrentId(movieId);
      });
  };
  const videoseries = (seriesId) => {
    axios
      .get(`tv/${seriesId}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length) {
          setyoutubeId(response.data.results[0].key);
          setcurrentId(seriesId);
        }
      });
  };
  return (
    <div className="rawposters">
      <h2 className="genretitle">{props.title}</h2>
      <div className="posters">
        {all.map((object, index) => {
          if (object.backdrop_path) {
            return (
              <div key={index}>
                <img
                  className={props.isSmall ? "smallposter" : "poster"}
                  src={`${imageurl + object.backdrop_path}`}
                  alt="Image Not Available"
                  onClick={() => {
                    if (currentId === object.id) {
                      setyoutubeId("");
                    } else if (props.movie) {
                      videomovie(object.id);
                    } else {
                      videoseries(object.id);
                    }
                  }}
                />
                <h2 align="center">
                  {props.movie ? object.title : object.name}
                </h2>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      {youtubeId ? (
        <Youtube videoId={`${youtubeId}`} opts={opts} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Rawposters;
