import { HIDE_MODALMOVIE, SET_MODALACTIVE, SHOW_MODALMOVIE } from "../action/type";

let initialState = {
  modalMovie: false,
  role:0,//1 : thêm , 2 : chỉnh sửa , 
  movie: {
    biDanh: "",
    maPhim:"",
    hinhAnh: "",
    maNhom: "",
    danhGia:"",
    moTa: "",
    ngayKhoiChieu: "",
    tenPhim: "",
    trailer: "",
  },
}

const reducer = (state = initialState,{type,payload})=>{
  switch(type){
    case SHOW_MODALMOVIE:
      return {...state,modalMovie:true,movie:payload.movies,role:payload.role}
    case HIDE_MODALMOVIE:
      return {...state,modalMovie:false}
    default: return state
  }
}

export default reducer;