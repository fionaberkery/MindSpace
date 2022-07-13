import React from "react";

const BubblePop = ({ pop, style }) => {
  return <div className="bubble" onClick={pop} onTouchStart={pop} style={style}></div>;
};

export default BubblePop;