import { Box, Grid, withStyles, Typography, Button } from "@material-ui/core";
import styles from "./style";
import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import MovieList from "../MovieList";
import { useSelector } from "react-redux";
import UserList from "../UserList";
import ShowTime from "../ShowTime";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import { DataGrid } from "@material-ui/data-grid";
import AddIcon from "@material-ui/icons/Add";

const Home = (props) => {
  const columns = [
    { field: "id", headerName: "Mã Phim", width: 100 },
    { field: "hinhAnh", headerName: "Hình Ảnh", width: 130 },
    { field: "tenPhim", headerName: "Tên Phim", width: 160 },
    {
      field: "ngayKhoiChieu",
      headerName: "Ngày Chiếu",
      width: 120,
    },
    {
      field: "moTa",
      headerName: "Mô tả",
      width: 190,
      // valueGetter: (params) =>
      //   `${params.getValue("firstName") || ""} ${
      //     params.getValue("lastName") || ""
      //   }`,
    },
    {
      field: "action",
      headerName: "#",
      width: 110,
    },
  ];

  const rows = [
    {
      id: 1,
      hinhAnh: "Dnow",
      tenPhim: "Jon",
      ngayKhoiChieu: "123",
      moTa: "OK",
      action: "Sửa Xóa",
    },
    {
      id: 2,
      hinhAnh: "Cnow",
      tenPhim: "Jon",
      ngayKhoiChieu: "123",
      moTa: "OK",
      action: "Sửa Xóa",
    },
    {
      id: 3,
      hinhAnh: "Snow",
      tenPhim: "Kon",
      ngayKhoiChieu: "123",
      moTa: "OK",
      action: "Sửa Xóa",
    },
    {
      id: 4,
      hinhAnh: "Snow",
      tenPhim: "Jon",
      ngayKhoiChieu: "123",
      moTa: "OK",
      action: "Sửa Xóa",
    },
    {
      id: 5,
      hinhAnh: "ASnow",
      tenPhim: "Jon",
      ngayKhoiChieu: "123",
      moTa: "OK",
      action: "Sửa Xóa",
    },
    {
      id: 6,
      hinhAnh: "Snow",
      tenPhim: "Jon",
      ngayKhoiChieu: "123",
      moTa: "OK",
      action: "Sửa Xóa",
    },
    {
      id: 7,
      hinhAnh: "Snow",
      tenPhim: "Jon",
      ngayKhoiChieu: "123",
      moTa: "OK",
      action: "Sửa Xóa",
    },
    {
      id: 8,
      hinhAnh: "Snow",
      tenPhim: "Jon",
      ngayKhoiChieu: "123",
      moTa: "OK",
      action: "Sửa Xóa",
    },
    {
      id: 9,
      hinhAnh: "Snow",
      tenPhim: "Jon",
      ngayKhoiChieu: "123",
      moTa: "OK",
      action: "Sửa Xóa",
    },
  ];

  return (
    <div>
      <Box display={"flex"}>
        <Box className={props.classes.left} width={"20%"}>
          <SideBar />
        </Box>
        <Box className={props.classes.right} width={"80%"}>
          {/* =====NAVBAR===== */}
          <NavBar />

          {/* =====TOPCONTENT===== */}
          <Box className={props.classes.content}>
            <Box component="h3" variant="h5" paddingBottom={"20px"}>
              Trang Chủ
            </Box>
            <Grid container spacing={2} py={5}>
              <Grid
                item
                sm={6}
                md={4}
                xs={12}
                className={props.classes.contentItem}
              >
                <Box className={props.classes.item}>
                  <Box className={props.classes.itemIcon}>
                    <EqualizerIcon />
                  </Box>
                  <Box paddingLeft={"20px"}>
                    <Typography variant="h6" component="h5">
                      300
                    </Typography>
                    <Typography>Số lượng phim</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                sm={6}
                md={4}
                xs={12}
                className={props.classes.contentItem}
              >
                <Box className={props.classes.item}>
                  <Box className={props.classes.itemIcon}>
                    <EqualizerIcon />
                  </Box>
                  <Box paddingLeft={"20px"}>
                    <Typography variant="h6" component="h5">
                      300
                    </Typography>
                    <Typography>Số lượng phim</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                sm={6}
                md={4}
                xs={12}
                className={props.classes.contentItem}
              >
                <Box className={props.classes.item}>
                  <Box className={props.classes.itemIcon}>
                    <EqualizerIcon />
                  </Box>
                  <Box paddingLeft={"20px"}>
                    <Typography variant="h6" component="h5">
                      300
                    </Typography>
                    <Typography>Số lượng phim</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* =====HOMEITEM===== */}

            <Box height={500} className={props.classes.homeItem}>
              <Box className={props.classes.topItem}>
                <Typography component="h5" variant="h5">
                  Phim
                </Typography>
                <Button className={props.classes.btnItem}>
                  <AddIcon />
                  Thêm Mới
                </Button>
              </Box>

              {/* TABLE */}
              <Box className={props.classes.table}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}

                  // checkboxSelection
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(Home);
