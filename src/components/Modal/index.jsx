import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Modal, Select, TextField, withStyles } from '@material-ui/core';
import React, { memo, useEffect, useMemo } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./style"
import AddIcon from "@material-ui/icons/Add";
import CancelIcon from "@material-ui/icons/Cancel";
import { createAction } from '../../redux/action';
import {  HIDE_MODALMOVIE } from '../../redux/action/type';
import Backdrop from "@material-ui/core/Backdrop";
import EditIcon from "@material-ui/icons/Edit";
import {editMovie,addMovie, editMovieNoneImg} from "../../redux/action/movieAction";


const ModalMovie = (props) => {
  const dispatch = useDispatch();
  const modalMovie = useSelector((state) => {
    return state.modalMovies.modalMovie;
  });
  const role = useSelector((state) => {
    return state.modalMovies.role;
  });
  const moviea = useSelector((state) => {
    return state.modalMovies.movie;
  }); 
  
  

  const [state, setState] = useState({
    movies:{
    biDanh:'',
    maPhim:'',
    hinhAnh:"",
    maNhom:'' ,
    danhGia:'',
    moTa:'',
    ngayKhoiChieu: '',
    tenPhim: '',
    trailer: '',
  }});
  useEffect(()=>{setState({movies : moviea})},[]);
  const handleClose = useCallback(() => {
    dispatch(createAction(HIDE_MODALMOVIE));
  },[]);

  const handelOnchange = useCallback(
    (e) => {
      if(e.target.name === 'hinhAnh'){
        setState({
          movies :  { ...state.movies, hinhAnh : e.target.files[0] }
        })
      }else{
        setState({
          movies :  { ...state.movies, [e.target.name]: e.target.value },
        });
      }
    },
    [state.movies]
  );
  
  const {biDanh,
    maPhim,
    hinhAnh,
    maNhom,
    danhGia,
    moTa,
    ngayKhoiChieu,
    tenPhim,
    trailer,}= useMemo(()=>{
      return state.movies
    },[state.movies]);
  const handelSubmit = useCallback(
    (e) => {
      e.preventDefault();
      var form_data = new FormData();
      for(var key in state.movies){

        form_data.append(key,state.movies[key]);
      } 
      if(moviea.hinhAnh===state.movies.hinhAnh){
        console.log('chinh sua thong tin');
      }else{
        console.log('thay doi hinh anh');
      }
      // dispatch(moviea.hinhAnh===state.movies.hinhAnh?editMovieNoneImg(state.movies):editMovie(form_data));
      {role === 1 ? dispatch(addMovie(form_data)) : dispatch(moviea.hinhAnh===state.movies.hinhAnh?editMovieNoneImg(state.movies):editMovie(form_data))}
      dispatch(createAction(HIDE_MODALMOVIE));
      
      
    },
    [state.movies] 
  );
  //useMeno trả về 1 biến nếu không cần thiết để render lại
 

  const bodyModal = (<Box >
    <div className={props.classes.paper}>
    
    {role === 1 ? <h2 id="transition-modal-themmoi">Thêm Mới</h2> :  <h2 id="transition-modal-themmoi">Chỉnh sửa</h2>}
      
      <Box component="form">
        {/* {role!==1&&<img src={hinhAnh} alt="#"/>} */}
        <Container maxWidth="sm">
          <Grid container spacing={3}>
          <Grid item md={6}>
              <TextField
                
                label="Mã Phim"
                variant="outlined"
                className={props.classes.modalAdd}
                name="maPhim"
                type="number"
                onChange={handelOnchange}
                value={maPhim}
              />
            </Grid>

            <Grid item md={6}>
              <TextField
                
                label="Tên Phim"
                variant="outlined"
                className={props.classes.modalAdd}
                name="tenPhim"
                onChange={handelOnchange}
                value={tenPhim}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                
                label="Bí Danh"
                variant="outlined"
                className={props.classes.modalAdd}
                name="biDanh"
                onChange={handelOnchange}
                value={biDanh}
              />
            </Grid>

            <Grid item md={6}>
              <TextField
                
                label="Trailer"
                variant="outlined"
                className={props.classes.modalAdd}
                name="trailer"
                onChange={handelOnchange}
                value={trailer}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                
              label="Hình Ảnh"
              variant="outlined"
              className={props.classes.modalAdd}
              name="hinhAnh"
              onChange={handelOnchange} 
              files={hinhAnh}
              type="file"
            /> 
            </Grid>
            <Grid item md={6}>

            <FormControl variant="outlined" className={props.classes.modalAdd}>
        <InputLabel id="demo-simple-select-outlined-label">Mã nhóm</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={maNhom}
          onChange={handelOnchange}
          label="Mã Nhóm"
          name="maNhom"
        >
          <MenuItem value={"GP01"}>
            <em>GP01</em>
          </MenuItem>
          <MenuItem value={'GP02'}>GP02</MenuItem>
          <MenuItem value={'GP03'}>GP03</MenuItem>
          <MenuItem value={'GP04'}>GP04</MenuItem>
        </Select>
      </FormControl>

              
            </Grid>
            <Grid item md={6}>
              <TextField
                
                label="Đánh Giá"
                variant="outlined"
                className={props.classes.modalAdd}
                type="number"
                name="danhGia"
                onChange={handelOnchange}
                value={danhGia}
              />
            </Grid>

            <Grid item md={6}>
              <TextField
                
                label="Ngày Khởi Chiếu (mm/dd/yyyy)"
                variant="outlined"
                
                className={props.classes.modalAdd}
                name="ngayKhoiChieu"
                onChange={handelOnchange}
                value={ngayKhoiChieu}
              />
            </Grid>


            <Grid item md={12}>
              <TextField
               
                label="Mô Tả"
                variant="outlined"
                className={props.classes.modalAdd}
                name="moTa"
                onChange={handelOnchange}
                value={moTa}
              />
            </Grid>

            <Grid item md={12}>
              {role === 1 ? <Button
                className={props.classes.btnItemModal}
                onClick={handelSubmit}
                // onClick={handleClose}
              >
                <AddIcon />
                Thêm Mới
              </Button> : <Button
                className={props.classes.btnItemModalEdit}
                onClick={handelSubmit}
                // onClick={handleClose}
              >
                <EditIcon />
                Chỉnh Sửa
              </Button>}
              <Button
                className={props.classes.btnItemModalClose}
                type="button"
                onClick={handleClose}
              >
                <CancelIcon />
                Hủy
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  </Box>);

  return (
    <div>
       
                <Modal
                  aria-labelledby="transition-modal-themmoi"
                  aria-describedby="transition-modal-description"
                  className={props.classes.modal}
                  open={modalMovie}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  {bodyModal}
                </Modal>
              
    </div>
  );
};

export default  memo(withStyles(styles, { withTheme: true })(ModalMovie));