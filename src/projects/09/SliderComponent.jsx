import React from "react";

const SliderComponent = ({ setValue, handleInput, bgColor, textColor }) => {
 const sliderStyle = {
    appearence: "none",
    width: "100%",
    height: 25,
    // background: !bgColor ? "lightblue" : bgColor,
    background: "lightblue",
    cursor: "pointer",
 }
 
    return (
    <div className="container h-[700px] m-auto flex flex-col justify-center gap-100">
      <input
        type="range"
        min="0"
        max={100}
        value={setValue}
        onInput={handleInput}
        style={sliderStyle}
      />
      <div
        className="container shadow-lg"
        style={{
          color: !textColor ? "black" : textColor,
          background: !bgColor ? "lightblue" : bgColor,
          height: `${setValue * 3}px`,
          width: `${setValue * 3}px`,
          fontWeight: 600,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
        }}
      >
        <span>{setValue}</span>
      </div>
    </div>
  );
};

export default SliderComponent;
