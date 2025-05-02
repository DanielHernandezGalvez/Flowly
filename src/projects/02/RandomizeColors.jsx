import React from "react";
import Title from "../components/Title";

const RandomizeColors = () => {
  const handleClick = (event) => {
    // console.log(event);
    // getRandomColor();
  };

  const handleSecClick = (event) => {
    // console.log(event);
    console.log(getRandomColor())
    let body = document.querySelector("body");
    body.style.backgroundColor = getRandomColor();
    event.target.style.backgroundColor = getRandomColor();
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="container flex flex-col m-auto">
      <Title
        text={"Randomize Colors"}
        classes={"text-stone-800 text-2xl text-center"}
      />
      <div className="flex  items-center justify-center gap-10 h-[60vh]  shadow-lg rounded-lg mt-10 p-4">
        <button
          onClick={(event) => handleClick(event)}
          className="bg-purple-500 hover:bg-purple-700 text-white 
          font-bold py-2 px-4 rounded"
        >
          Click me
        </button>
        <button
          onClick={handleSecClick}
          className="bg-red-500 hover:bg-red-700 text-white font-bold 
          py-2 px-4 rounded"
        >
          Click me
        </button>
        <button
          onClick={handleSecClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold 
          py-2 px-4 rounded"
        >
          Click me
        </button>
        <button
          onClick={handleSecClick}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        >
          Click me
        </button>
      </div>
    </div>
  );
};

export default RandomizeColors;
