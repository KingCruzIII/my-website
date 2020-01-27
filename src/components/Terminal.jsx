import React from "react";
import { Paper, Toolbar, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "40%",
    width: "40%",
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    position: "absolute"
  },
  titleBar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "transparent"
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey[500]
  }
}));

function Terminal() {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <Paper className={classes.titleBar}>
        <div />
        <Typography>title</Typography>
        <div>items tings</div>
      </Paper>
      <Paper className={classes.content}>some content</Paper>
    </Paper>
  );
}

export default Terminal;
