import React from "react";
import Icon from "components/common/Icon";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  appBar: {
    top: "auto",
    bottom: 0,
    width: "50%",
    minWidth: "500px",
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: "32px",
    marginBottom: "15px"
  },
  home: {
    color: "black",
    position: "absolute"
  }
}));

const Taskbar = props => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton className={classes.home}>
          <Icon icon="home" color="action" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Taskbar;
