import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  withStyles,
  withTheme,
} from "@material-ui/core";
import styles from "./style";
import React, { memo, useMemo } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import {  SHOW_MODALUSER } from "../../redux/action/type";
import { createAction } from "../../redux/action";
import swal from "sweetalert";
import { deleteUser, detailUser } from "../../redux/action/userAction";
import InfoIcon from '@material-ui/icons/Info';



const UserItem = (props) => {
  const dispatch = useDispatch();
  const {
    taiKhoan,
      matKhau,
      email,
      soDt,
      maNhom,
      maLoaiNguoiDung,
      hoTen,
  } = useMemo(()=>{
    return props.item
  },[props.item]);
  
  
  

  const handleToggle = useCallback((taiKhoan)=>() => {
    dispatch(detailUser(taiKhoan))
  },[props.item]);

  const handelEdit = useCallback ((values)=>()=>{
    dispatch(createAction(SHOW_MODALUSER,{users:values ,
    role:2
    }))
  },[props.item])

  const handelDelete = useCallback((taiKhoan)=>()=>{
    swal({
      title: "Bạn chắc chứ?",
      text: "Bạn có muốn xóa người dùng này không!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
  })
      .then((willDelete) => {
          if (willDelete) {
              swal("Người dùng đã được xóa !", {
                  icon: "success",
              });
              dispatch(deleteUser(taiKhoan));
          } else {
              swal("Bạn thật sáng suốt!");
          }
      });


    
  },[props.item])

 
  return (
    <div>
      <Card className={props.classes.root}>
        <CardActionArea className={props.classes.cardArea}>
          <CardContent className={props.classes.cardContent}>
            
            
            <Box className={props.classes.circleName}>
              <Typography variant="h6" component="h6" >
                {/* Cắt bớt chữ */}
                {hoTen.substr(0,1)}
               </Typography> 
            </Box>
            <Box padding={"inherit"} fontSize={"20px"}>
                <Box paddingLeft={"10px"}>{hoTen.substr(0,20)}</Box>
                
            </Box>
            
            

          </CardContent>

          <Box className={props.classes.btnContent}>
                <Button className={props.classes.btnIconEdit} color={"primary"} onClick={handleToggle(taiKhoan)}>
            <InfoIcon className={props.classes.iconsize} />
          </Button>
          <Button className={props.classes.btnIconEdit} color={"secondary"} onClick={handelEdit(props.item)}>
            <EditIcon className={props.classes.iconsize}/>
          </Button>
          <Button className={props.classes.btnIconDelete} color="error" onClick={handelDelete(taiKhoan)}>
            <DeleteIcon className={props.classes.iconsize}/>
          </Button>
                </Box>
        </CardActionArea>
        
      </Card>

      {/* MODAL */}
      
    </div>
  );
};

export default memo(withStyles(styles, { withTheme: true })(UserItem));
