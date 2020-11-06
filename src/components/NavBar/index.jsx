import {
  Box,
  Button,
  Menu,
  MenuItem,
  TextField,
  Typography,
  withStyles,
  withTheme,
} from "@material-ui/core";
import styles from "./style";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import React, { useCallback, useState } from "react";
import { AccountBox } from "@material-ui/icons";
import login from "../../asset/images/user.png";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailUser } from "../../redux/action/userAction";

const NavBar = (props) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const credentials = useSelector((state) => {
    return state.credentials.credentialsA;
  });
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  },[]);
  const handleDetail = useCallback(() => {
    dispatch(detailUser(credentials.taiKhoan));
  },[credentials]);
  const handelLogout = useCallback(()=>{
    localStorage.setItem("t", null); //Lưu token trên local đề F5 không mất
        localStorage.setItem("o", null);
  },[])

  
  // const object = localStorage.getItem("o");

  return (
    <Box className={props.classes.backGround}>
      <Box className={props.classes.search}>
        <Box className={props.classes.searchIcon}>
          <SearchIcon />
        </Box>
        <InputBase
          placeholder="Search…"
          classes={{
            root: props.classes.inputRoot,
            input: props.classes.inputInput,
          }}
          // inputProps={{ "aria-label": "search" }}
        />
      </Box>
      <Box className={props.classes.login}>
        <Box paddingTop={"8px"}>{credentials.hoTen}</Box>

        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <ArrowDropDownIcon className={props.classes.arrow} />
          <img src={login} alt="1" className={props.classes.loginImg} />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className={props.classes.loginMenu}
        >
          <MenuItem onClick={handleDetail}>Thông tin cá nhân</MenuItem>
          <MenuItem onClick={handelLogout}> <Link to="/dangnhap">Đăng xuất</Link> </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default withStyles(styles, { withTheme: true })(NavBar);
