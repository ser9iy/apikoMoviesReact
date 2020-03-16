import { types, flow, applySnapshot, getSnapshot } from "mobx-state-tree";

const Film = types.model({
  poster_path: types.maybeNull(types.optional(types.string, "")),
  overview: types.string,
  release_date: types.string,
  id: types.number,
  vote_average: types.number,
  title: types.string
});

const FilmsList = types
  .model({
    page: types.optional(types.number, 1),
    total_pages: types.optional(types.number, 1),
    results: types.optional(types.array(Film), [])
  })
  .actions(self => {
    let initState = {};
    return {
      afterCreate() {
        //  self.load();
        // console.log("created");
        initState = getSnapshot(self);
      },
      findById(id) {
        const res = self.results.find(el => el.id === parseInt(id));
        return res;
      },
      clear() {
        applySnapshot(self, initState);
      },
      load: flow(function* load() {
        const resp = yield fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=89c7d7d9e7a3de86e27a4d871fb88384&page=" +
            self.page
        );

        applySnapshot(self, yield resp.json());
        //console.log(getSnapshot(self));
      }),
  
    };
  });
export const filmsList = FilmsList.create({});
