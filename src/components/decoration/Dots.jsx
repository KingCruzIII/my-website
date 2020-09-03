import * as R from "ramda";
import React, { Fragment, useEffect, useState } from "react";
import Dot from "components/decoration/Dot";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const getRandomInt = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomizeOpacity = arr => {
  let newArr = R.clone(arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[i][j].length; k++) {
        if (Math.random() < 0.9) {
          newArr[i][j][k].opacity = getRandomInt(8) / 10 + 0.1;
        }
      }
    }
  }
  return newArr;
};

const generateRowOfDots = (count, group, row) => {
  let arr = [];
  let dotSpeed;
  for (let i = 0; i < count; i++) {
    dotSpeed = Math.floor(Math.random() * 10 + 1) / 10;
    dotSpeed = Math.random() < 0.2 ? -0.2 : dotSpeed;
    arr.push({
      offset: group + row / count,
      spacing: Math.floor(Math.random() * 100 + 1),
      size: getRandomInt(15, 6),
      speed: dotSpeed,
      fuzz: (Math.floor(Math.random() * 6) + 1) * 0.1,
      opacity: getRandomInt(8) / 10 + 0.1
    });
  }
  return arr;
};

const Dots = props => {
  const theme = useTheme();
  const med = useMediaQuery(theme.breakpoints.up("sm"));
  const large = useMediaQuery(theme.breakpoints.up("md"));

  // need to get these from props and pass in
  let numGroups = 2;
  let maxStarPerRow;
  let numRows;
  // https://stackoverflow.com/questions/16443380/common-css-media-queries-break-points

  if (large) {
    maxStarPerRow = 10;
    numRows = 10;
  } else if (med) {
    maxStarPerRow = 7;
    numRows = 9;
  } else {
    maxStarPerRow = 4;
    numRows = 4;
  }

  // debug stuff
  let starCount = 0;
  let groupCount = 0;
  let rowCount = 0;

  let initialDotArray = [];
  // Initial random dots
  for (let i = 0; i < numGroups; i++) {
    let group = [];
    for (let j = 0; j < numRows; j++) {
      let rowDotCount = getRandomInt(maxStarPerRow);
      starCount += maxStarPerRow;
      group.push(generateRowOfDots(rowDotCount, i, j));
      rowCount++;
    }

    groupCount++;
    initialDotArray.push(group);
  }
  // console.log("groupCount" + groupCount);
  // console.log("rowCount" + rowCount);
  console.log("starCount" + starCount);
  const [dotArray, setDotArray] = useState(initialDotArray);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotArray(randomizeOpacity(dotArray));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const renderDots = arr => {
    let things = [];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < arr[i][j].length; k++) {
          things.push(
            <Dot
              key={`group-${i}-row-${j}-dot-${k}`}
              opacity={arr[i][j][k].opacity}
              size={arr[i][j][k].size}
              offset={arr[i][j][k].offset}
              speed={arr[i][j][k].speed}
              offsetFuzz={arr[i][j][k].fuzz}
              spacing={arr[i][j][k].spacing}
              row={i}
            />
          );
        }
      }
    }
    return things;
  };
  return (
    <Fragment>
      <div>
        <Typography variant="h2">{starCount}</Typography>
      </div>
      {renderDots(dotArray)}
    </Fragment>
  );
};
export default Dots;
