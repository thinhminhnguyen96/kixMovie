import { FilterNone } from "@material-ui/icons";

const style = (theme) => {
  return {
    backGround: {
      color: "#22D1EE !important",
      paddingBottom: theme.spacing(20),
      backgroundColor: "#303A52",
      height: "1000px",
    },
    border: {
      // borderBottom: "1px solid #22D1EE",
    },
    logo: {
      textDecoration: "none",
      display: "block",
      padding: theme.spacing(1.3, 3),
      backgroundColor: "#0e153a",
      boxShadow: "",
    },
    aDecoration: {
      textDecoration: "none",
      color: "#22D1EE",
      display: "block",
      padding: theme.spacing(2, 3),
      "&:hover": {
        backgroundColor: "#43425D",
      },
    },
    active: {
      textDecoration: "none",
      color: "#22D1EE",
      display: "block",
      padding: theme.spacing(2, 3),
      backgroundColor: "#43425D",
    },
    icon: {
      color: "#A5A4BF",
      paddingRight: theme.spacing(1),
      textAlign: "center",
      marginBottom: theme.spacing(-0.5),
    },
  };
};
export default style;
