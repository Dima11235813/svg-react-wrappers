import React, { useState } from "react";
import { CircleOptions } from "../components/svgWrappers/models/CircleOptions";
import { getRandomColor } from "../utils/colorUtils";
import layersOfCircles from "../components/LayersOfCircles";
import { CursorPoint } from "../components/svgWrappers/models/CursorPoint";
// import { CircleWrapper } from "../components/svgWrappers/CircleWrapper";

interface CircleFactoryOptions {
  numberOfCircles: number;
  xOffset: number;
  yOffset: number;
  radiusStart: number;
  radiusInterval: number;
}
const NUMBER_OF_CIRCLES = 60;
const LARGEST_RADIUS = 50;
const SMALLEST_RADIUS = 1;
const circleFactoryOptions: CircleFactoryOptions = {
  numberOfCircles: NUMBER_OF_CIRCLES,
  xOffset: 1,
  yOffset: 1,
  radiusStart: LARGEST_RADIUS,
  radiusInterval: 1.1//Math.floor(((LARGEST_RADIUS / NUMBER_OF_CIRCLES) * 10) / 10)
};

const optionsForCircleArray: CircleOptions[] = new Array(
  circleFactoryOptions.numberOfCircles
)
  .fill(1)
  .map((item, index) => {
    const {
      xOffset,
      yOffset,
      radiusInterval,
      radiusStart
    } = circleFactoryOptions;
    const radiusToApply = (Math.floor(radiusStart - (index + 1) * radiusInterval) * 10) /  10
    const newCircleToCreate: CircleOptions = {
      // x: 50,
      // y: 25,
      x: (index + 1) * Math.floor((xOffset * .95) * 10) / 10,
      y: (index + 1) * yOffset,
      radius: radiusToApply > 100 ? 100 : radiusToApply,
      color: getRandomColor()
    };
    return newCircleToCreate;
  });
const r = "FF",
  g = "88",
  b = "33";
// const getRadiusToApply = (radius: number) => {
//   return Math.floor((circleFactoryOptions.radiusStart / radius) * 10) / 10;
// };
function LayeredCircleFactory() {
  let currentEvent: CursorPoint;
  let [clickXy, setClickXy] = useState({ x: 150, y: 150 });
  const intervalHandler = () => {
    setClickXy(currentEvent);
  };
  let pointerMoveEventIntervalHandler: NodeJS.Timeout;
  const handleContainerClick = (event: any) => {
    currentEvent = { x: event.screenX, y: event.screenY };
    clearTimeout(pointerMoveEventIntervalHandler);
    pointerMoveEventIntervalHandler = setTimeout(
      () => intervalHandler(),
      4
    );
  };
  return (
    <div onPointerMove={handleContainerClick} className="App">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="100%" height="100%" />
        {layersOfCircles(optionsForCircleArray, clickXy)}
      </svg>
    </div>
  );
}

export default LayeredCircleFactory;
