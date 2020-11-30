import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Container, Grid, Box } from "@material-ui/core";
import Taskbar from "components/Taskbar";
import Theme from "components/Theme";
import blueGrey from "@material-ui/core/colors/blueGrey";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import Intro from "components/pages/Intro";
import Clouds from "components/decoration/Clouds";
import Icon from "components/common/Icon";
import Dots from "components/decoration/Dots";
import AboutMe from "./pages/AboutMe";
import zIndex from "@material-ui/core/styles/zIndex";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
  spacer: {
    height: theme.mixins.toolbar.minHeight
  },
  main: {
    justifyContent: "center",
    display: "flex",
    zIndex: "1000",
    height: "100%",
    width: "100%"
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  root: {
    background: blueGrey[800],
    height: "100vh",
    width: "100vw"
  },
  bottom: {
    zIndex: "1000",
    background:
      "linear-gradient(0deg, rgba(135,188,222,1) 0%, rgba(135,188,222,1) 53%, rgba(135,188,222,0) 100%)"
  },
  moon: {
    marginLeft: "75%",
    opacity: 0.5,
    zIndex: 1601
  },
  moonBackground: {
    marginLeft: "75%",
    zIndex: 1500,
    color: blueGrey[800]
  }
}));

export default function App() {
  console.log("app rendered");
  const classes = useStyles();
  const laxRef = useRef(null);

  const theme = useTheme();
  const ops = {
    noSsr: true
  };
  const [med, setMed] = useState(
    useMediaQuery(theme.breakpoints.up("sm"), ops)
  );

  const [large, setLarge] = useState(
    useMediaQuery(theme.breakpoints.up("md"), ops)
  );

  return (
    <Theme>
      <CssBaseline />
      <Box component="main" className={`${classes.root} element`}>
        <Parallax pages={3} ref={laxRef}>
          {/* <ParallaxLayer
            offset={1}
            speed={1}
            style={{ backgroundColor: "#805E73" }}
          /> */}
          <ParallaxLayer offset={2} speed={1} className={classes.bottom} />
          <ParallaxLayer offset={0.25} speed={0.5}>
            <Container className={classes.main} maxWidth="md">
              <div className={classes.spacer} />
              <Intro />
            </Container>
          </ParallaxLayer>
          <ParallaxLayer offset={0.02} speed={-0.5} className={classes.moon}>
            <Icon icon="moon" autoSize size="l" rotation={180} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.02}
            speed={-0.5}
            className={classes.moonBackground}
          >
            <Icon icon="moon" autoSize size="l" rotation={180} />
          </ParallaxLayer>
          <Dots med={med} large={large} />
          <Clouds />
          <ParallaxLayer offset={1} speed={0.5}>
            <Container className={classes.main} maxWidth="md">
              {/* <AboutMe /> */}
            </Container>
          </ParallaxLayer>
        </Parallax>
      </Box>
      {/* <Taskbar /> */}
    </Theme>
  );
}
