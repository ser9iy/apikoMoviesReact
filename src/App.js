import React, { useEffect } from "react";
import "./styles.css";
import Navigation from "./components/Navigation";

import { Switch, Route } from "react-router";
import FilmList from "./scenes/FilmList";
import { Home } from "./scenes/Home";
import SingleFilm from "./scenes/SingleFilm";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <Navigation />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/search/:query" render={() => <FilmList />} />
          <Route path="/movies/:id" render={() => <SingleFilm />} />
          <Route path="/movies" render={() => <FilmList />} />
        </Switch>
      </div>
    </div>
  );
}
