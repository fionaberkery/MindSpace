import React from "react";
import './bubble.css'

const BubblePop = ({ pop }) => {
  return <div className="bubble" onClick={pop} onTouchStart={pop} />;
};

export default BubblePop;