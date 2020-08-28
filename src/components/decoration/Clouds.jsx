import React, { Fragment } from "react";
import Icon from "components/common/Icon";
import { ParallaxLayer } from "react-spring/renderprops-addons";

const Clouds = () => {
  return (
    <Fragment>
      <ParallaxLayer
        offset={1}
        speed={0.8}
        style={{ zIndex: "1100", opacity: 0.1 }}
      >
        <Icon
          icon="cloud"
          autoSize
          size="s"
          style={{ display: "block", marginLeft: "85%" }}
        />
        <Icon
          icon="cloud"
          autoSize
          size="m"
          style={{ display: "block", marginLeft: "5%" }}
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.2}
        speed={0.2}
        style={{ zIndex: "1100", opacity: 0.2 }}
      >
        <Icon
          icon="cloud"
          autoSize
          size="s"
          style={{ display: "block", marginLeft: "75%" }}
        />
        <Icon
          icon="cloud"
          autoSize
          size="l"
          style={{ display: "block", marginLeft: "15%" }}
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.6}
        speed={-0.1}
        style={{ zIndex: "1100", opacity: 0.4 }}
      >
        <Icon
          icon="cloud"
          autoSize
          size="m"
          style={{ display: "block", marginLeft: "70%" }}
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.8}
        speed={-0.2}
        style={{ zIndex: "1100", opacity: 0.4 }}
      >
        <Icon
          icon="cloud"
          autoSize
          size="25%"
          style={{ display: "block", marginLeft: "55%" }}
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.6}
        speed={0.1}
        style={{ zIndex: "1100", opacity: 0.4 }}
      >
        <Icon
          icon="cloud"
          autoSize
          size="m"
          style={{ display: "block", marginLeft: "30%" }}
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.75}
        speed={0.5}
        style={{ zIndex: "1100", opacity: 0.1 }}
      >
        <Icon
          icon="cloud"
          autoSize
          size="m"
          style={{ display: "block", marginLeft: "75%" }}
        />
        <Icon
          icon="cloud"
          autoSize
          size="m"
          style={{ display: "block", marginLeft: "25%" }}
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2.5}
        speed={0.4}
        style={{ zIndex: "1100", opacity: 0.6 }}
      >
        <Icon
          icon="cloud"
          autoSize
          size="m"
          style={{ display: "block", marginLeft: "75%" }}
        />
        <Icon
          icon="cloud"
          autoSize
          size="15%"
          style={{ display: "block", marginLeft: "5%" }}
        />
      </ParallaxLayer>
    </Fragment>
  );
};
export default Clouds;
