import React, { useState } from "react";
import SliderComponent from "./SliderComponent";
import Title from "./../components/Title";

const SliderApp = () => {
  const [slideValue, setSlideValue] = useState(0);
  const handleSliderValueChange = (event) => {
    setSlideValue(event.target.value);
  };

  let bgColor;
  let textColor;

  if (slideValue < 25) {
    bgColor = "red";
  }

  if (slideValue < 25 && slideValue <= 50) {
    bgColor = "blue";
  }

  if (slideValue < 51 && slideValue <= 75) {
    bgColor = "orange";
    textColor = "white";
  }
  if (slideValue > 75 && slideValue <= 99) {
    bgColor = "limegreen";
    textColor = "white";
  }
  if (slideValue > 99) {
    bgColor = "red";
    textColor = "white";
  }

  return (
    <div className="text-center py-12">
      <Title title="Slide TO GROW" />
      <SliderComponent
        setValue={slideValue}
        bgColor={bgColor}
        textColor={textColor}
        handleInput={handleSliderValueChange}
      />
    </div>
  );
};

export default SliderApp;
