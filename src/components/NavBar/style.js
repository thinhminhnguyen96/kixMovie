import { fade } from "@material-ui/core/styles";
const style = (theme) => {
  return {
    
    backGround: {
      backgroundColor: "#303A52",
      color: "#22D1EE",
      height: theme.spacing(7),
      alignItem: "center",
      justifyContent: "between",
      display: "flex",
      position: "relative",
      borderLeft: "1px solid #A5A4BF",
      '& .MuiPaper-root':{
        marginTop:"50px",
        transform: "translateX(-10px)",
      }
    },
    search: {
      position: "absolute",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(1.5),
      width: theme.spacing(30),
      "&:focus": {
        width: theme.spacing(40),
      },

      // [theme.breakpoints.up("sm")]: {
      //   marginLeft: theme.spacing(1),
      //   marginTop: theme.spacing(1.5),
      //   width: theme.spacing(30),
      //   "&:focus": {
      //     width: theme.spacing(40),
      //   },
      // },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      // position: "absolute",
      // marginLeft: "0",
      // marginTop: "-10px",
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: theme.spacing(5),
      transition: theme.transitions.create("width"),
      width: "100%",
      "&:focus": {
        width: theme.spacing(50),
      },
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: theme.spacing(50),
        },
      },
      
    },
    loginMenu:{
      '& .MuiPaper-root':{
        marginTop:"50px",
        transform:"translateX(-10px) !important",
      }
    },

    login: {
      position: "absolute",
      right: "10px",
      bottom: "10px",
      display: "flex",
      // alignItem: "center",
      // justifyContent: "center",
    },
    loginImg: {
      height: "30px",
      width: "30px",
      borderRadius: "50%",
      paddingBottom: "5px",
    },
    arrow: {
      marginBottom: "10px",
      color: "#A5A4BF",
    },
  };
};
export default style;
