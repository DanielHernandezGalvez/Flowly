import React, { useState, useEffect } from "react";
import Button from "./Button";

const Alert = ({ type, message, delay = false, delayTome = 3000 }) => {
  const [showAlert, setShowAlert] = useState(true);

  const closeAlert = (e) => {
    e.target.parentElement.parentElement.classList.add("fadeAlert");
    setTimeout(() => {
      setShowAlert(false);
    }, delayTome);
  }

  useEffect(() => {
    delay && setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  }, []);

  return (
    showAlert && (
      <div className={`container m-5 p-5 ${type}`}>
        <div className="alert-close">
            <span className="mr-1">{message}</span>
            <Button text={"x"} onClick={closeAlert}/>
        </div>
      </div>
    )
  );
};

export default Alert;
