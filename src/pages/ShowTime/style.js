import { fade } from "@material-ui/core";

const style = (theme) => {
  return {
    left: {
      height: "100%",
      color: "#22D1EE",
      position: "fixed",
    },
    right: {
      color: "#43425D",
      backgroundColor: "#dee1ec",
      marginLeft: "20%",
    },
    content: {
      position: "relative",
      padding: theme.spacing(4, 6),
    },
    contentItem: {},
    item: {
      display: "flex",
      backgroundColor: "#fff",
      padding: theme.spacing(1),
    },
    itemIcon: {
      border: "1px solid black",
      borderRadius: "50%",
      borderColor: "#22D1EE",
      height: theme.spacing(5),
      width: theme.spacing(5),
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      color: "#22D1EE",
    },

    //MODEL
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
    },
    modalAdd: {
      width: "100%",
    },

    btnItemModal: {
      backgroundColor: "#22EE6D",
      color: "#fff",
      padding: theme.spacing(1, 2),
      "&:hover": {
        backgroundColor: "#43425D",
        color: "#22D1EE",
      },
    },
    btnItemModalClose: {
      backgroundColor: "#FF6565",
      color: "#fff",
      padding: theme.spacing(1, 2),
      marginLeft: theme.spacing(1),
      "&:hover": {
        backgroundColor: "#43425D",
        color: "#22D1EE",
      },
    },

    btnItemModalEdit:{
      backgroundColor: "#22D1EE",
      color: "#fff",
      padding: theme.spacing(1, 2),
      marginLeft: theme.spacing(1),
      "&:hover": {
        backgroundColor: "#43425D",
        color: "#22D1EE",
      },
    },

    // USERITEM
    userItem: {
      marginTop: theme.spacing(5),
      padding: theme.spacing(3, 5),
      backgroundColor: "#fff",
    },
    topItem: {
      justifyContent: "space-between",
      display: "flex",
    },
    btnItem: {
      backgroundColor: "#22EE6D",
      color: "#fff",
      padding: theme.spacing(0, 1),
      "&:hover": {
        backgroundColor: "#43425D",
        color: "#22D1EE",
      },
    },
    table: {
      marginTop: theme.spacing(5),
      // height: 400,
      width: "100%",
    },


    pagination:{
      padding:theme.spacing(3,2),

    },


    //SEARCH
    headersearch:{
      display:"flex",
      justifyContent: 'between',
      position: 'relative',
    },

    search: {
      position: 'absolute',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      right:theme.spacing(9),
      top:0,
      marginTop: theme.spacing(2),
      // marginLeft: 0,
      width: '20%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        
      },
    },
    searchbtn:{
      position: 'absolute',
      marginTop: theme.spacing(2),
      backgroundColor:"#43425D",
      color:"#22D1EE",
      right:0,
      top:0,
      "&:hover": {
        backgroundColor: "#fff",
        color: "#22D1EE",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    
    details:{
      marginTop:"50px"
    },
    hr:{
      
      backgroundColor:"#43425D",
      paddingTop:"2px",
      marginTop:"10px",
      
    },
    name:{
      color:"#43425D",
      fontSize:"15px",
      display:"inline-block",
      fontWeight:"bold",
      marginBlockEnd: "unset",
    }

    

    //END RETURN
  };
};
export default style;
