import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {
  const proxyurl = "https://thingproxy.freeboard.io/fetch/";

  const popularData = await axios.get(proxyurl + popularGamesURL());
  const newGamesData = await axios.get(proxyurl + newGamesURL());
  const upcomingData = await axios.get(proxyurl + upcomingGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const proxyurl = "https://thingproxy.freeboard.io/fetch/";
  const searchGameData = await axios.get(proxyurl + searchGameURL(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGameData.data.results,
    },
  });
};
