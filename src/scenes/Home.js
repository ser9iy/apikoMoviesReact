import React from "react";

import { filmsList } from "../models/Film";
import FilmList from "../scenes/FilmList";
export const Home = () => {
  return (
    <div>
      <h3>Welcome</h3>
      <form>
        <input type="text" placeholder="Search for film" />
        <button>Go</button>
      </form>
      <FilmList query="hi" />
    </div>
  );
};
