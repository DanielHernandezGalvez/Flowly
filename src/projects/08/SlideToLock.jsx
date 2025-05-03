import React, { useState, useEffect } from "react";
import Unlock from "./Unlock";
import { AiFillUnlock } from "react-icons/ai";

const SlideToLock = () => {
  const [showLockSlider, setShowLockSlider] = useState(true);
  let bgimage =
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHNsaWRlJTIwdG8lMjBsb2NrJTIwc2NyZWVufGVufDB8fHx8MTY5MDQ1NTQ3Ng&ixlib=rb-4.0.3&q=80&w=1080";
  const [uiProps, setUiProps] = useState({
    uiText: "Unlock screen",
    uiColor: "#eee",
    uiBg: `url(${bgimage})`,
  });
  const [lockSlider, setLockSlider] = useState(0);

  const handleLockSliderInput = (e) => {
    setLockSlider(e.target.value);
    console.log(e.target.value);
    setShowLockSlider(false);
  };

  const handleUnlock = () => {
    setLockSlider(0);
    setShowLockSlider(true);
    setUiProps({
      uiText: "Unlocked",
      uiColor: "#eee",
      uiBg: `url(${bgimage})`,
    });
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#999";
    if (lockSlider === "100") {
      setShowLockSlider(false);
      setUiProps({
        uiText: "Lock Screen",
        uiColor: "#eee",
        uiBg: `url(${bgimage})`,
      });
    }
  }, [lockSlider]);

  return (
    <div
      className="container text-center flex flex-col border-2
       border-black justify-center items-center m-auto gap-4"
      style={{
        height: "70vh",
        marginTop: "10vh",
        width: 340,
        border: "1px solid #000",
        background: uiProps.uiBg,
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-2xl text-stone-900">{uiProps.uiText}</h1>
      {showLockSlider ? (
        <Unlock
          handleInput={handleLockSliderInput}
          value={lockSlider}
          width={"250px"}
        />
      ) : (
        <AiFillUnlock
          className="text-stone-700 text-6xl"
          onClick={handleUnlock}
        />
      )}
    </div>
  );
};

export default SlideToLock;
