import { Box, Typography, withStyles, withTheme } from "@material-ui/core";
import styles from "./style";
import React, { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../asset/images/LogoDark.svg";
import DateRangeIcon from "@material-ui/icons/DateRange";
import PersonIcon from "@material-ui/icons/Person";
import TheatersIcon from "@material-ui/icons/Theaters";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../redux/action";
import {
  SET_ACTIVE_CALENDAR,
  SET_ACTIVE_HOME,
  SET_ACTIVE_MOVIE,
  SET_ACTIVE_USER,
} from "../../redux/action/type";

const SideBar = (props) => {
  const activeHome = useSelector((state) => {
    return state.active.active.home;
  });
  const activeMovie = useSelector((state) => {
    return state.active.active.movie;
  });
  const activeUser = useSelector((state) => {
    return state.active.active.user;
  });
  const activeCalendar = useSelector((state) => {
    return state.active.active.calendar;
  });
  const dispatch = useDispatch();
  const handelActiveHome = useCallback(() => {
    dispatch(createAction(SET_ACTIVE_HOME, true));
  }, [activeHome, dispatch]);
  const handelActiveMovie = useCallback(() => {
    dispatch(createAction(SET_ACTIVE_MOVIE, true));
  }, [activeMovie, dispatch]);

  const handelActiveUser = useCallback(() => {
    dispatch(createAction(SET_ACTIVE_USER, true));
  }, [activeUser, dispatch]);
  const handelActiveCalendar = useCallback(() => {
    dispatch(createAction(SET_ACTIVE_CALENDAR, true));
  }, [activeCalendar, dispatch]);
  return (
    <div className={props.classes.backGround}>
      <Box>
        <Box className={props.classes.border}>
          <NavLink
            className={props.classes.logo}
            to="/"
            onClick={handelActiveHome}
          >
            <img src={logo} alt="logo1" width={"40px"} height={"40px"}/>
          </NavLink>
        </Box>
        <NavLink
          className={
            !activeMovie ? props.classes.aDecoration : props.classes.active
          }
          to="/phim"
          onClick={handelActiveMovie}
        >
          <TheatersIcon className={props.classes.icon} />
          Danh Sách Phim
        </NavLink>
        <NavLink
          className={
            !activeUser ? props.classes.aDecoration : props.classes.active
          }
          to="/nguoidung"
          onClick={handelActiveUser}
        >
          <PersonIcon className={props.classes.icon} /> Người dùng
        </NavLink>
        <NavLink
          className={
            !activeCalendar ? props.classes.aDecoration : props.classes.active
          }
          to="/lichchieu"
          onClick={handelActiveCalendar}
        >
          <DateRangeIcon className={props.classes.icon} /> Lịch Chiếu
        </NavLink>
      </Box>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(SideBar);
