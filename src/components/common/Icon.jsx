import * as R from "ramda";
import React from "react";
// import { Icon as MuiIcon } from "@material-ui/core";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far);

const Icon = props => {
  const getSize = () => {
    let autoSize = Boolean(props.autoSize);
    let dimensions;
    switch (props.size) {
      case "xxl":
        dimensions = autoSize ? "50%" : "256px";
        break;
      case "xl":
        dimensions = autoSize ? "40%" : "128px";
        break;
      case "large":
      case "lg":
      case "l":
        dimensions = autoSize ? "30%" : "64px";
        break;
      case "medium":
      case "m":
        dimensions = autoSize ? "20%" : "32px";
        break;
      case "small":
      case "sm":
      case "s":
        dimensions = autoSize ? "10%" : "16px";
        break;
      default:
        dimensions = props.size;
        break;
    }
    return dimensions;
  };

  let ops = R.omit(["size", "autoSize"], props);
  let iconSize = getSize();

  if (props.size) {
    ops.style = R.merge(ops.style, {
      width: iconSize,
      height: iconSize
    });
  }
  let prefix = ops.prefix || "fa";
  return <FontAwesomeIcon {...ops} icon={[prefix, props.icon]} />;
  // return <MuiIcon {...ops} className={"fa " + prefix + "-" + props.icon} />;
};

export default Icon;
