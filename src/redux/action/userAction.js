import { createAction } from ".";
import connector from "../../configs/connector";
import {UserService} from "../../services/index"
import {   SET_USER,SET_USERSEARCH ,SET_USERDETAIL} from "./type";
import swal from "sweetalert"

export const fetchUser = (soTrang,soPhanTuTrang) => {
  
  return dispatch =>{
    UserService.getAllUserService(soTrang,soPhanTuTrang).then(res=>{
      dispatch(createAction(SET_USER, res.data));
    }).catch(err=>{
      console.log(err);
    })
  }
}

export const editUser = (data) =>{
  return dispatch => {
    UserService.editUserService(data).then(()=>{
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

export const addUser = (data) =>{
  console.log(data);
  return dispatch => {
    UserService.addUserService(data).then(()=>{
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

export const deleteUser = (taiKhoan) =>{
  return dispatch => {
    UserService.deleteUserService(taiKhoan).then(()=>{
      console.log("DELETE Thành Công")
    }).catch(err=>{
      console.log("DELETE Thất Bại");
    })
  }
}


export const searchUser = (taiKhoan,soTrang,soPhanTuTrang) =>{
  return dispatch => {
    UserService.searchUserService(taiKhoan,soTrang,soPhanTuTrang).then((res)=>{
      dispatch(createAction(SET_USERSEARCH,res.data));
      // callback();
    }).catch(err=>{
      console.log("Search Thất Bại");
    })
  }
}

export const detailUser = (taiKhoan) =>{
  return dispatch =>{
    UserService.detailUserService(taiKhoan).then((res)=>{
      console.log(res.data);
      dispatch(createAction(SET_USERDETAIL,res.data));
    }).catch(err=>{
      console.log("Detail Thất Bại");
    })
  }
}