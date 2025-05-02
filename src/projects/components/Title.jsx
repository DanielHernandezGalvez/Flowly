import React from "react";

const Title = ({ text, classes }) => {
  return (
    <h1
      className={
        !classes ? "text-center text-2xl text-stone-800" : classes
      }
    >
      {!text ? "Title" : text}
    </h1>
  );
};

export default Title;
