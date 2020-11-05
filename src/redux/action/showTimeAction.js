import { createAction } from ".";
import connector from "../../configs/connector";
import {ShowTimeService} from "../../services/index"
import {  SET_SHOWTIME } from "./type";
import swal from "sweetalert"

export const fetchShowTime = (id) => {
  
  return dispatch =>{
    ShowTimeService.getAllShowTimeService(id).then(res=>{
      console.log(res.data);
      dispatch(createAction(SET_SHOWTIME, res.data));
    }).catch(err=>{
      console.log(err);
    })
  }
}



export const addShowTime = (data) =>{
  console.log(data);
  return dispatch => {
    ShowTimeService.addShowTimeService(data).then(()=>{
      swal({
        title: "Thêm Thành công!",
        text: `Chúc mừng bạn đã thêm lịch chiếu thành công !`,
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





