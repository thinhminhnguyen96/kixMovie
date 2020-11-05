import { ADD_MOVIE, SET_MOVIE } from "../action/type";

let initialState = {
  movieList: [],
  totalCount:1,
  totalPages:1,
  loading:true,

};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MOVIE:
      state.loading = false;
      state.movieList = payload.items;
      state.totalCount = payload.totalCount;
      state.totalPages = payload.totalPages;
      return { ...state };

    default:
      return state;
  }
};
export default reducer;
