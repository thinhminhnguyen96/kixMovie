import { ADD_MOVIE, SET_MOVIE } from "../action/type";

let initialState = {
  movieList: [],
  totalCount:0,
  totalPages:0,
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
