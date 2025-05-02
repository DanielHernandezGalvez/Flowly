import React, { useState } from "react";
import Button from "../components/Button";

const DashController = () => {
  const [temperature, setTemperature] = useState(14);

  const handleIncrease = () => {
    setTemperature(temperature + 1);
  }

  const handleDecrease = () => {
    setTemperature(temperature - 1);
  }

  return (
    <div className="container mt-3 text-center bg-gray-200 m-auto p-12 rounded-lg shadow-lg">
      <div
        className={`container w-[200px] h-[200px] flex flex-col justify-center items-center rounded-full ${
          temperature < 16 ? "bg-blue-400" : "bg-orange-400"
        } p-auto m-auto`}
      >
        <h1 className="text-2xl font-bold text-white">Temperature</h1>
        <span className="text-6xl text-gray-100">{temperature} °C</span>
      </div>
      <div className="flex justify-center items-center gap-5 my-2">
        <Button onClick={handleDecrease} btnClass={""} text={"-"} />
        <Button onClick={handleIncrease} btnClass={""} text={"+"} />
      </div>
    </div>
  );
};

export default DashController;
