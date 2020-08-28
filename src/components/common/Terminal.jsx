import * as R from "ramda";
import React, { Fragment } from "react";
import Icon from "components/common/Icon";
import { Paper, Toolbar, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import yellow from "@material-ui/core/colors/yellow";
import green from "@material-ui/core/colors/green";
import grey from "@material-ui/core/colors/grey";
import BlinkingCursor from "components/common/BlinkingCursor";

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0),
      height: "100%"
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(1),
      height: "60%"
    },
    [theme.breakpoints.up("lg")]: {},
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    backgroundColor: grey[400],
    margin: theme.spacing(2)
  },
  titleBar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "transparent"
  },
  content: {
    flexGrow: 1,
    backgroundColor: grey[900],
    color: "white",
    padding: theme.spacing(2)
  },
  command: {
    display: "flex"
  }
}));

const mapIndexed = R.addIndex(R.map);

const Terminal = props => {
  console.log(props);
  const classes = useStyles();

  const renderOutput = (command, index) => {
    if (Array.isArray(command.output)) {
      return mapIndexed((output, index) => {
        return <Typography key={`output-text-${index}`}>{output}</Typography>;
      }, command.output);
    }
    return <Typography>{command.output}</Typography>;
  };

  const renderCommands = commands => {
    return mapIndexed((command, index) => {
      return (
        <Fragment key={`command-fragment-${index}`}>
          <Typography key={`command-text-${index}`} className={classes.command}>
            <Icon key={`command-icon-${index}`} icon="caret-right" />
            {command.command}
          </Typography>
          <Typography />
          {console.log(renderOutput(command, index))}
          {renderOutput(command, index)}
        </Fragment>
      );
    }, commands);
  };

  const renderLastLine = () => {
    return (
      <Typography className={classes.command}>
        <Icon icon="caret-right" />
        <BlinkingCursor />
      </Typography>
    );
  };

  return (
    <Paper className={classes.container}>
      <div className={classes.titleBar}>
        <div />
        <div>
          <Icon icon="circle" size="sm" style={{ color: green[500] }} />
          <Icon icon="circle" size="sm" style={{ color: yellow[500] }} />
          <Icon icon="circle" size="sm" style={{ color: red[500] }} />
        </div>
      </div>
      <Paper className={classes.content}>
        {renderCommands(props.commands)}
        {renderLastLine()}
      </Paper>
    </Paper>
  );
};

export default Terminal;
