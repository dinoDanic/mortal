import React from "react";
import Home from "./pages/Home";
import globalStyle from "./style/globalStyle.scss";
import { Route } from "react-router-dom";
import Nav from "./components/nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
/* 840b3c06738c4e899116899a94867297 */
