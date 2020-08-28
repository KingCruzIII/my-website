import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  "@keyframes blinker": {
    from: { opacity: 1 },
    to: { opacity: 0 }
  },
  cursor: {
    animationName: "$blinker",
    animationDuration: "1s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite"
  }
}));

const BlinkingCursor = props => {
  const classes = useStyles();
  let css = classes.cursor;
  if (props.off) {
    css = "";
  }
  return (
    <Typography {...props} className={css}>
      |
    </Typography>
  );
};

export default BlinkingCursor;
