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

    // MOVIEITEM
    movieItem: {
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

    }
    

    //END RETURN
  };
};
export default style;
