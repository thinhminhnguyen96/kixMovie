import {  SET_USER,SET_USERDETAIL,SET_USERSEARCH } from "../action/type";

let initialState = {
  userListSearch:[],
  searchActive:false,
  userList: [],
  totalCount:1,
  totalPages:1,
  detail:[],
  loading:true,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      state.loading = false;
      state.searchActive=false;
      state.userList = payload.items;
      state.totalCount = payload.totalCount;
      state.totalPages = payload.totalPages;
      return { ...state };
      case SET_USERSEARCH:{
        
        state.searchActive=true;
        state.userListSearch = payload.items;
        state.totalCount = payload.totalCount;
        state.totalPages = payload.totalPages;
        return { ...state };
      }
      case SET_USERDETAIL:{
        state.detail = payload;
        return {...state}
      }
    default:
      return state;
  }
};
export default reducer;
