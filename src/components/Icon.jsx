import React from "react";
import { Icon as MuiIcon } from "@material-ui/core";

function Icon(props) {
  let ops = props;
  console.log(props);
  let prefix = ops.prefix || "fa";

  return <MuiIcon {...ops} className={"fa " + prefix + "-" + props.icon} />;
}

export default Icon;
