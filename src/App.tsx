import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Story from "./pages/Story";
import Orphanages from "./pages/Orphanages";
import Team from "./pages/Team";
import Impact from "./pages/Impact";
import Join from "./pages/Join";
import Donate from "./pages/Donate";

import Header from "./components/Header";

import "./App.css";

function App() {
  const [result, setResult] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await fetch("/api/");
      setResult(await result.text());
    };

    fetchItems();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/test">
            Test! <Link to="/">Back home</Link>
          </Route>
          <Route path="/donate">
            {" "}
            <Donate />{" "}
          </Route>
          <Route path="/join">
            {" "}
            <Join />{" "}
          </Route>
          <Route path="/impact">
            {" "}
            <Impact />{" "}
          </Route>
          <Route path="/team">
            {" "}
            <Team />{" "}
          </Route>
          <Route path="/orphanages">
            {" "}
            <Orphanages />{" "}
          </Route>
          <Route path="/story">
            {" "}
            <Story />{" "}
          </Route>
          <Route path="/">
            {" "}
            <Home />{" "}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
