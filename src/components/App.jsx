import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Container } from "@material-ui/core";
import Taskbar from "components/Taskbar";
import Theme from "components/Theme";
// import background from "./assets/background.jpeg";
import Terminal from "components/Terminal";

const useStyles = makeStyles(theme => ({
  main: {
    height: "100vh"
    // background: `url(${background})  no-repeat center center fixed`
  }
}));

export default function App(props) {
  const classes = useStyles();
  return <div>aslkmdfj;askdlfj;asdlf</div>;
}

// <Theme>
//       <CssBaseline />
//       <Container component="main" className={classes.main} maxWidth={false}>
//         <Terminal />
//       </Container>
//       <Taskbar />
//     </Theme>
