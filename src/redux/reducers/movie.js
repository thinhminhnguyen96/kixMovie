import { ADD_MOVIE, EDIT_MOVIE, SET_MOVIE } from "../action/type";

let initialState = {
  movieList: [],
  totalCount:0,
  totalPages:0,
  loading:true,

};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MOVIE:
      {
        state.loading = false;
      state.movieList = payload.items;
      state.totalCount = payload.totalCount;
      state.totalPages = payload.totalPages;
      return { ...state };
      }
    case EDIT_MOVIE:{
        console.log(payload);
        let index = state.movieList.findIndex(item=>item.maPhim ===payload.maPhim);
        if(index!==-1){
          let mangTam= [...state.movieList];
          mangTam[index]=payload;
          state.movieList=mangTam;
        }
      return {...state};
    }
    default:
      return state;
  }
};
export default reducer;
