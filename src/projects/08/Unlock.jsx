import React from "react";
import "./unlock.css";

const Unlock = ({ handleInput, sliderValue, width }) => {
  let styleSlider = {
    appearance: "none",
    width: !width ? "300px" : width,
    height: "50px",
    background: "rgba(188, 190, 188, 0.5)",
    outline: "none",
  };
  return (
    <input
      onInput={handleInput}
      type="range"
      value={sliderValue}
      className=" mb-2 border-1 slider"
      style={styleSlider}
    />
  );
};

export default Unlock;
