import React from "react";

const Line = ({ orientation, length }) => {
  // Determine the style based on orientation
  const lineStyle =
    orientation === "h"
      ? { width: `${length}px`, height: "0.7px", backgroundColor: "grey" }
      : { height: `${length}px`, width: "0.7px", backgroundColor: "grey" };

  return <div style={lineStyle}></div>;
};

export default Line;
