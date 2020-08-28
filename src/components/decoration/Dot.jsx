import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import Icon from "components/common/Icon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  dot: {
    zIndex: "1050",
    color: "#fff",
    display: "block",
    transitionProperty: "opacity",
    transitionDuration: "1s",
    transitionDelay: ".5s"
  }
}));

const Dot = props => {
  const classes = useStyles();

  return (
    <ParallaxLayer offset={props.offset + props.offsetFuzz} speed={props.speed}>
      <Icon
        icon="circle"
        autoSize
        size={props.size}
        className={classes.dot}
        style={{
          marginLeft: `${props.spacing}%`,
          opacity: props.opacity
        }}
      />
    </ParallaxLayer>
  );
};
export default Dot;
