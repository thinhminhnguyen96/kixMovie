import {  HIDE_USERDETAIL, SET_USER,SET_USERDETAIL,SET_USERSEARCH } from "../action/type";

let initialState = {
  userListSearch:[],
  searchActive:false,
  userList: [],
  totalCount:0,
  totalPages:0,
  // totalCountSearch:0,
  // totalPagesSearch:0,
  // nameSearch:"",
  modalUserDetail:false,
  detail:[],
  detailBook:[],
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
        console.log(payload)
        state.searchActive=true;
       
        state.userListSearch = payload.items;
        state.totalCount = payload.totalCount;
        state.totalPages = payload.totalPages;
        return { ...state };
      }
      case SET_USERDETAIL:{
        state.modalUserDetail = true;
        state.detail = payload;
        state.detailBook = payload.thongTinDatVe;
        return {...state}
      }
      case HIDE_USERDETAIL:{
        state.modalUserDetail = false;
        return {...state}
      }
    default:
      return state;
  }
};
export default reducer;
