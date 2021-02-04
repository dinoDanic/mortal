import React from "react";
import globalStyle from "../style/globalStyle.scss";
import style from "../style/gameDetail.scss";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";
//IMAGES
import playstation from "../img/playstation.svg";
import nintendo from "../img/nintendo.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//STAR IMAGES
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  //EXit detail
  const exitDetailHander = (e) => {
    const element = e.target;
    if (element.classList.contains("card-shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  // START LOGIC
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };

  // GET PLATFORM IMAGES
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  //Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <motion.div onClick={exitDetailHander} className="card-shadow">
          <motion.div className="detail" layoutId={pathId}>
            <div className="stats">
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <div className="info">
                <h3>Platforms</h3>
                <div className="platforms">
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt={data.platform.name}
                    ></img>
                  ))}
                </div>
              </div>
            </div>
            <div className="media">
              <motion.img
                layoutId={`image${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </div>
            <div className="description">{game.description_raw}</div>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  alt={screen.image}
                  key={screen.id}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default GameDetail;
