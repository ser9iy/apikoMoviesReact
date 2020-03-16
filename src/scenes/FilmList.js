import React, { useEffect } from "react";
import { useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { filmsList } from "../models/Film";
import { observer } from "mobx-react";
const FilmList = ({ query }) => {
  const { path } = useRouteMatch();

  useEffect(() => {
    if (path === "/") {
      filmsList.clear();
      if (query) {
        filmsList.search(query);
      }
    } else {
      filmsList.load();
    }
  });
  return (
    <div>
      <ul>
        {filmsList.results.map(el => (
          <li key={el.id}>
            <Link to={path + "/" + el.id}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default observer(FilmList);
