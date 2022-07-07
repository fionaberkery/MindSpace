import React from "react";

const BubblePop = ({ pop }) => {
  return <div className="bubblepop" onClick={pop} onTouchStart={pop} />;
};

export default BubblePop;