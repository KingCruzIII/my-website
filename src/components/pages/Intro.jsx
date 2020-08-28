import React from "react";
import Terminal from "components/common/Terminal";
import { Typography } from "@material-ui/core";
import BlinkingCursor from "components/common/BlinkingCursor";
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
    </div>
  );
};

export default Intro;
