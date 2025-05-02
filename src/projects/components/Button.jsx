import React from "react";

const Button = ({ text, btnClass, icon, onClick }) => {
  return (
    <button
      className={
        btnClass === "" &&
        `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`
      }
      onClick={onClick}
    >
      {icon}{text}
    </button>
  );
};

export default Button;
