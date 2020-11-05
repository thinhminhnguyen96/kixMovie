import { createAction } from ".";
import connector from "../../configs/connector";
import {MovieService} from "../../services/index"
import { SET_MOVIE } from "./type";
import swal from "sweetalert"

export const fetchMovie = (soTrang,soPhanTuTrang) => {
  return dispatch =>{
    MovieService.getAllMovieService(soTrang,soPhanTuTrang).then(res=>{
      dispatch(createAction(SET_MOVIE, res.data));
    }).catch(err=>{
      console.log(err);
    })
  }
}

export const editMovie = (data) =>{
  return dispatch => {
    MovieService.editMovieService(data).then(()=>{
      swal({
        title: "Chỉnh sửa Thành công!",
        text: `Chúc mừng bạn đã chỉnh sửa phim thành công !`,
        icon: "success",
    })
      console.log("Edit Thành Công")
    }).catch(err=>{
      swal({
        title: "Chỉnh sửa Thất bại!",
        text: `Vui lòng chọn ảnh !`,
        icon: "error",
    })
      console.log("Edit Thất Bại");
    })
  }
}

export const editMovieNoneImg = (data) =>{
  return dispatch => {
    MovieService.editMovieServiceNoneImg(data).then(()=>{
      swal({
        title: "Chỉnh sửa Thành công!",
        text: `Chúc mừng bạn đã chỉnh sửa phim thành công !`,
        icon: "success",
    })
      console.log("Edit Thành Công")
    }).catch(err=>{
      swal({
        title: "Chỉnh sửa Thất bại!",
        text: `Vui lòng kiểm tra lại !`,
        icon: "error",
    })
      console.log("Edit Thất Bại");
    })
  }
}

export const addMovie = (data) =>{
  
  return dispatch => {
    console.log(data);
    MovieService.addMovieService(data).then(()=>{
      swal({
        title: "Thêm Thành công!",
        text: `Chúc mừng bạn đã thêm phim thành công !`,
        icon: "success",
    })
      console.log("ADD Thành Công")
    }).catch(err=>{
      swal({
        title: "Thêm Thất bại!",
        text: `Vui lòng kiểm tra lại !`,
        icon: "error",
    })
      console.log("ADD Thất Bại");
    })
  }
}

export const deleteMovie = (maPhim) =>{
  return dispatch => {
    MovieService.deleteMovieService(maPhim).then(()=>{
      console.log(maPhim);
      console.log("DELETE Thành Công")
      
    }).catch(err=>{
      console.log("DELETE Thất Bại");
    })
  }
}

export const detailMovie = (maPhim) =>{
  console.log(maPhim);
  return dispatch=>{
    MovieService.detailMovieService(maPhim).then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
}



