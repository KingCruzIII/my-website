import React from "react";
import Terminal from "components/common/Terminal";
import { Typography } from "@material-ui/core";
import BlinkingCursor from "components/common/BlinkingCursor";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
const terminalText = [
  {
    command: "~/Introduction",
    output: [
      "Hello,",
      "My name is Cruz Muniz, and i'm an aspiring full-stack web developer.",
      "Welcome to my site."
    ]
  }
];

const Intro = () => {
  const theme = useTheme();
  let size;
  const largePlus = useMediaQuery(theme.breakpoints.up("lg"));
  const med = useMediaQuery(theme.breakpoints.only("md"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));
  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  if (largePlus) {
    size = "largePlus";
  } else if (med) {
    size = "medium";
  } else if (sm) {
    size = "small";
  } else if (xs) {
    size = "xtrasmall";
  }
  return (
    <div>
      <Typography variant="h2">
        Hello, My name is{" "}
        <Typography color="primary" component="span" variant="h2">
          Cruz Muniz.
        </Typography>
      </Typography>
      <Typography variant="h2">I am a full-stack web developer.</Typography>
      <Typography variant="h2">
        This site is a WIP
        <BlinkingCursor variant="h2" component="span" />
      </Typography>
      <Typography variant="h2">Screen size: {size}</Typography>
    </div>
  );
};

export default Intro;
