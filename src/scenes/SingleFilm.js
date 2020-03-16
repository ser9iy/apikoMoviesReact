import React from "react";
import { useParams } from "react-router";
import { filmsList } from "../models/Film";
import { observer } from "mobx-react";
const SingleFilm = () => {
  const { id } = useParams();
  const film = filmsList.findById(id);
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
        width="200px"
      />
      <h3>{film.title}</h3>
      <h4>
        Release {film.release_date} Rating {film.vote_average}
      </h4>
      <p>{film.overview}</p>
    </div>
  );
};

export default observer(SingleFilm);
