import React, { useState } from "react";
import Title from "./components/Title";

const Esignature = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const inputStyle = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "10px",
    width: "50%",
    boxSizing: "border-box",
    margin: "10px",
  };

  document.body.style.backgroundColor = "#f0f0f0";

  return (
    <div className="container h-[60vh] flex flex-col justify-center align-center text-center mx-auto p-4 bg-white shadow-lg rounded-lg mt-10">
      <Title text={name} />
      <Title classes={"text-red-300 text-xl mb"} text={!date? "ingeresa tu cumpleaños": date} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolore
        explicabo laudantium itaque, veniam modi at quos sequi porro doloribus
        corrupti, dignissimos possimus architecto voluptas! Autem pariatur atque
        dignissimos odio.
      </p>
      <footer className="flex flex-col items-center justify-center mt-4">
        <input
          type="date"
          value={date}
          style={inputStyle}
          onChange={handleDateChange}
        />
        <input
          type="text"
          value={name}
          style={inputStyle}
          onChange={handleNameChange}
        />
      </footer>
    </div>
  );
};

export default Esignature;
