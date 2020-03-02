import React, { useState } from "react";

function CircleGrowShrink() {
  let [clickXy, setClickXy] = useState({ x: 150, y: 150 });
  const handleContainerClick = (click: any) => {
    const x = click.screenX;
    const y = click.screenY;
    const newCoorObj = { x, y };
    // console.log(newCoorObj);
    setClickXy(newCoorObj);
  };
  const { x, y } = clickXy;
  let windowX = window.innerWidth;
  let windowY = window.innerHeight;
  let circleX = 50;
  let circleY = 50;
  
  return (
    <React.Fragment>
      <div onPointerMove={handleContainerClick} className="App">
        <div className="svg-container">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="100%" height="100%" />
            <circle
              cx={`${circleX}%`}
              cy={`${circleY}%`}
              r={`${(windowX * windowY) / (x * y)}`}
              fill="white"
            />
          </svg>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CircleGrowShrink;
