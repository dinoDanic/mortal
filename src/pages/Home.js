import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import Game from "../components/Game";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import style from "../style/home.scss";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animations";

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //Get that data back
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="game-list"
    >
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="gamewrap searched">
            <h2>Searched Games</h2>
            <motion.div className="games">
              {searched.map((game) => (
                <Game
                  name={game.name}
                  release={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </motion.div>
          </div>
        ) : (
          ""
        )}
        <div className="gamewrap">
          <h2>Upcmoing Games</h2>
          <motion.div className="games">
            {upcoming.map((game) => (
              <Game
                name={game.name}
                release={game.released}
                id={game.id}
                image={game.background_image}
                key={game.id}
              />
            ))}
          </motion.div>
        </div>
        <div className="gamewrap">
          <h2>Popular Games</h2>
          <motion.div className="games">
            {popular.map((game) => (
              <Game
                name={game.name}
                release={game.released}
                id={game.id}
                image={game.background_image}
                key={game.id}
              />
            ))}
          </motion.div>
        </div>
        <div className="gamewrap">
          <h2>New Games</h2>
          <motion.div className="games">
            {newGames.map((game) => (
              <Game
                name={game.name}
                release={game.released}
                id={game.id}
                image={game.background_image}
                key={game.id}
              />
            ))}
          </motion.div>
        </div>
      </AnimateSharedLayout>
    </motion.div>
  );
};

export default Home;
