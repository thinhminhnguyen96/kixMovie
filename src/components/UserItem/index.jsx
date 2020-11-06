import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Fade,
  Grid,
  Modal,
  Typography,
  withStyles,
  withTheme,
} from "@material-ui/core";
import styles from "./style";
import React, { memo, useMemo, useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Backdrop from "@material-ui/core/Backdrop";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {  SHOW_MODALUSER } from "../../redux/action/type";
import { createAction } from "../../redux/action";
import swal from "sweetalert";
import { deleteUser, detailUser } from "../../redux/action/userAction";
import InfoIcon from '@material-ui/icons/Info';
import login from "../../asset/images/user.png";
import { Link } from "react-router-dom";


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
  
  
  

  const handleToggle = useCallback(() => {
    dispatch(detailUser(taiKhoan))
  },[taiKhoan]);

  const handelEdit = useCallback (()=>{
    dispatch(createAction(SHOW_MODALUSER,{users: {
      taiKhoan:taiKhoan,
      matKhau:matKhau,
      email:email,
      soDt:soDt,
      maNhom:maNhom,
      maLoaiNguoiDung:maLoaiNguoiDung,
      hoTen:hoTen,
    },
    role:2
    }))
  },[])

  const handelDelete = useCallback(()=>{
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


    
  },[])

 
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
                <Button className={props.classes.btnIconEdit} color={"primary"} onClick={handleToggle}>
            <InfoIcon className={props.classes.iconsize} />
          </Button>
          <Button className={props.classes.btnIconEdit} color={"secondary"} onClick={handelEdit}>
            <EditIcon className={props.classes.iconsize}/>
          </Button>
          <Button className={props.classes.btnIconDelete} color="error" onClick={handelDelete}>
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
