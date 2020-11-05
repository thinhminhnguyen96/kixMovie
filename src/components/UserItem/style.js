const style = (theme) => {
  return {
    root: {
      maxWidth: "100%",
    },
    btn: {
      fullWidth: "100px",
      backgroundColor: "#fff",
      border: "1px solid #303A52",
      color: "#22D1EE",

      minWidth: 0,
      padding: "5px 8px",
      "&:hover": {
        backgroundColor: "#303A52",
      },
    },
    btnIconEdit: {
      fontSize:"5px",
      minWidth: 0,
      padding: "5px",
    },
    btnIconDelete: {
      fontSize:"5px",
      minWidth: 0,
      padding: "5px",
      color: "#FF6565",
    },

    //MODAL
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      height: 500,
      width: 500,
    },
    paperRigth: {
      paddingLeft: 50,
    },
    cardArea:{
      position:"relative"
    },
    cardContent:{
      display:"flex"
    },
    circleName:{
      display:"flex",
      borderRadius:"50%",
      justifyContent:"center",
      alignItems:"center",
      height:"50px",
      width:"50px",
      border:"1px solid bisque",
      backgroundColor:"#22D1EE",
      color: "#303A52",
      boxShadow: "1px 3px 7px black",
    },
    btnContent:{
      position:"absolute",
      textAlign:"center",
      top:1,
      right:1
    }
    ,
    iconsize:{
      fontSize:"20px"
    }
  };
};
export default style;
