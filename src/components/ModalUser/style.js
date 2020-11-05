const styles = (theme) =>{
  return {
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
    }
  }
 }

 export default styles;