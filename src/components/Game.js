import React from "react";
import { motion } from "framer-motion";
import style from "../style/game.scss";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
import { popup } from "../animations";

const Game = ({ name, release, image, id }) => {
  const stringPathId = id.toString();
  //Load Details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <motion.div
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
      className="styled-game"
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{release}</p>
        <motion.img
          layoutId={`image${stringPathId}`}
          src={smallImage(image, 640)}
          alt="{name}"
        />
      </Link>
    </motion.div>
  );
};

export default Game;
