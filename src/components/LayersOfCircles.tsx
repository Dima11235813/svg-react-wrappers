import React from "react";
import { CircleOptions } from "./svgWrappers/models/CircleOptions";
import { CursorPoint } from "./svgWrappers/models/CursorPoint";

const layersOfCircles = (
  circleOptions: CircleOptions[],
  clickXy: CursorPoint
) => {
  const { x, y } = clickXy;
  let windowX = window.innerWidth;
  let windowY = window.innerHeight;
  let ratioOfDistanceFromOrigin = Math.floor((windowX * windowY) / (x * y));
  return circleOptions.map((circleProps: CircleOptions, index) => {
      const { x, y, radius, color } = circleProps;
      let radiusToApply = radius * ratioOfDistanceFromOrigin
    console.log(circleProps);
    return (
      <circle
        key={`circle${index}`}
        cx={`${x}%`}
        cy={`${y}%`}
        r={`${radiusToApply}`}
        fill={color}
        // fill={`${r}${g}${b}`}
      />
    );
  });
};
export default layersOfCircles;
