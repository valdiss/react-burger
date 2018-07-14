import { createMuiTheme } from "@material-ui/core";
import deepOrange from "@material-ui/core/colors/deepOrange";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#4fc3f7"
    },
    secondary: {
      main: "#ffca28"
    },
    error: deepOrange
  }
});

export default theme;
