import * as R from "ramda";
import React, { Fragment, useEffect, useState } from "react";
import Dot from "components/decoration/Dot";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { array } from "prop-types";

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
      offset: group + row / count - 1,
      spacing: Math.floor(Math.random() * 100 + 1),
      size: getRandomInt(15, 6),
      speed: dotSpeed,
      fuzz: (Math.floor(Math.random() * 6) + 1) * 0.1,
      opacity: getRandomInt(8) / 10 + 0.1
    });
  }
  return arr;
};

const generateDotGroups = (rowCount, groupNumber, maxStarPerRow, starter) => {
  let group = R.clone(starter) || [];
  group.length = group.length > rowCount ? rowCount : group.length;

  for (let rowNumber = group.length; rowNumber < rowCount; rowNumber++) {
    let rowDotCount = maxStarPerRow;
    group.push(generateRowOfDots(rowDotCount, groupNumber, rowNumber));
  }
  return group;
};

const generateDots = (groupCount, rowCount, maxStarPerRow, starter) => {
  let dots = R.clone(starter) || [];
  // If we want to shrink the array then we would give a groupCount that is smaller than the length of the current array.
  // So we set the length to the smaller number which will trim off the extra elements.
  dots.length = dots.length > groupCount ? groupCount : dots.length;
  for (let groupNumber = dots.length; groupNumber < groupCount; groupNumber++) {
    dots.push(
      generateDotGroups(rowCount, groupNumber, maxStarPerRow, dots[groupNumber])
    );
  }
  return dots;
};

const getCount = arr => {
  let groupCount = 0;
  let rowCount = 0;
  let starCount = 0;
  arr.forEach(group => {
    groupCount++;
    group.forEach(row => {
      rowCount++;
      row.forEach(star => {
        starCount++;
      });
    });
  });
  return starCount;
};

const getStarSettings = (med, large) => {
  // [startingNumRows, startingMaxStars]
  if (large) {
    return [10, 8];
  } else if (med) {
    return [10, 4];
  } else {
    return [6, 2];
  }
};
/*
Group - a collection of rows. The number of groups Corresponds to the number of pages on the main screen
Rows - a collection of dots. 
*/
const Dots = props => {
  const [dotArray, setDotArray] = useState([]);

  useEffect(() => {
    let size = getStarSettings(props.med, props.large);
    // groupCount, rowCount, maxStarPerRow, starter

    // for some reason adding dotArray to the end of this breaks it probably will just say fuck it and leave it creating a new array every time
    setDotArray(generateDots(props.numGroups || 3, size[0], size[1]));
  }, [props.med, props.large]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotArray(randomizeOpacity(dotArray));
    }, 2000);
    return () => clearInterval(interval);
  }, [dotArray]);

  const renderDots = arr => {
    let things = [];
    console.log(dotArray);
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
        <Typography variant="h2">Star Count: {getCount(dotArray)}</Typography>
      </div>
      {renderDots(dotArray)}
    </Fragment>
  );
};
export default Dots;
