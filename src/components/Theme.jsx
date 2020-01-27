import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import purple from "@material-ui/core/colors/purple";
import grey from "@material-ui/core/colors/grey";

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: purple,
    container: grey[900]
  }
});

function Theme(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default Theme;
