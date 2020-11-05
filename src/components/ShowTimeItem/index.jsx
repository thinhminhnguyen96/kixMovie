import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography, withStyles, withTheme } from "@material-ui/core";
import React, { memo, useCallback, useState } from "react";
import styles from "./style";
import { useDispatch, useSelector } from "react-redux";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const ShowTimeItem = (props) => {
  const dispatch = useDispatch();
  const {hinhAnh,lichChieuPhim,maCumRap,tenCumRap}=props.lichChieu;
  const [open,setOpen] = useState(false);
  const handleOpen = useCallback(()=>{
    setOpen(true);

  },[]);

  const handleClose = useCallback(()=>{
    setOpen(false);
  },[]);

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  
  

  const renderLichChieu= useCallback(()=>{
    return lichChieuPhim.map((item,index)=>{
      const {giaVe,maLichChieu,maRap,ngayChieuGioChieu,tenRap,thoiLuong}=item;
      const date = new Date(ngayChieuGioChieu);
      // const t = `${ d.getHours() + ":" + d.getMinutes()  }`;
      
      return (
        <Grid item md={3} key={index} style={{maxWidth:"100%"}}>
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span><p className={props.classes.name}>{`${(date.getDate() >= 10? date.getDate() : "0"+date.getDate()) +"/"+ (date.getMonth() >= 10? date.getMonth() : "0"+date.getMonth())+"/" + date.getFullYear() + " " }`} </p> 
          <p className={props.classes.date}>{`${ (date.getHours() >= 10 ? date.getHours() : "0"+ date.getHours()) +":"+ (date.getMinutes() >= 10 ? date.getMinutes() : "0"+ date.getMinutes())}`}</p> 
          </span> <br/>
        </AccordionSummary>
        <AccordionDetails className={props.classes.accordiondetails}>
      <span><p className={props.classes.name}>Giá vé : </p> {giaVe}</span>
      <span><p className={props.classes.name}>Mã lịch chiếu : </p> {maLichChieu}</span>
      <span><p className={props.classes.name}>Mã rạp : </p> {maRap}</span>
      <span><p className={props.classes.name}>Ngày Khởi Chiếu : </p> {`${(date.getDate() >= 10? date.getDate() : "0"+date.getDate()) +"/"+ (date.getMonth() >= 10? date.getMonth() : "0"+date.getMonth())+"/" + date.getFullYear() + " " + (date.getHours() >= 10 ? date.getHours() : "0"+ date.getHours()) +":"+ (date.getMinutes() >= 10 ? date.getMinutes() : "0"+ date.getMinutes())}`}</span> <br/>
      <span><p className={props.classes.name}>Tên rạp : </p> {tenRap}</span>
      <span><p className={props.classes.name}>Thời lượng : </p> {thoiLuong}</span>

      
        </AccordionDetails>
      </Accordion>
      
          
         

        </Grid>

        
      )


        
    })
  },[lichChieuPhim,open])


  return (
    <Box>

    <Grid container my={5} spacing={1}>
    {renderLichChieu()}
    </Grid>
    

    
    </Box>
    )

};

export default memo(withStyles(styles, { withTheme: true })(ShowTimeItem));
