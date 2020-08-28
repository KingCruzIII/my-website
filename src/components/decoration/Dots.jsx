import * as R from "ramda";
import React, { Fragment, useEffect, useState } from "react";
import Dot from "components/decoration/Dot";

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

const generateRowOfDots = (count, group, row, maxStarPerRow) => {
  let arr = [];
  let dotSpeed;

  for (let i = 0; i < count; i++) {
    dotSpeed = Math.floor(Math.random() * 10 + 1) / 10;
    dotSpeed = Math.random() < 0.2 ? -0.2 : dotSpeed;
    arr.push({
      offset: group + row / maxStarPerRow,
      spacing: Math.floor(Math.random() * 100 + 1),
      size: getRandomInt(15, 5),
      speed: dotSpeed,
      fuzz: Math.random() < 0.5 ? -0.03 : 0.03,
      opacity: getRandomInt(8) / 10 + 0.1
    });
  }
  return arr;
};

// have to generate dot info first
const Dots = props => {
  const numRows = props.numRow || 3;
  const maxStarPerRow = props.numStarPerRow || 10;
  let initialDotArray = [];
  // Initial random dots
  for (let groupNum = 0; groupNum < numRows; groupNum++) {
    let group = [];
    for (let i = 0; i < maxStarPerRow; i++) {
      let rowDotCount = getRandomInt(maxStarPerRow);
      group.push(generateRowOfDots(rowDotCount, groupNum, i, maxStarPerRow));
    }

    initialDotArray.push(group);
  }
  const [dotArray, setDotArray] = useState(initialDotArray);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotArray(randomizeOpacity(dotArray));
      console.log("interval");
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const generateDots = arr => {
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
  return <Fragment>{generateDots(dotArray)}</Fragment>;
};
export default Dots;
