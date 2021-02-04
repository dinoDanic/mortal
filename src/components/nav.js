import React, { useState } from "react";
//ANIMATIONS
import globalStyle from "../style/globalStyle.scss";
import navStyle from "../style/navStyle.scss";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
//REDUX AND ROUTES
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <motion.nav variants={fadeIn} initial="hidden" animate="show">
      <div onClick={clearSearched} className="logo">
        <h1>Mortal</h1>
      </div>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </motion.nav>
  );
};

export default Nav;
