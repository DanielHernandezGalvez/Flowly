import React, { useState } from "react";
import Title from "../components/Title";
import {
  AiFillSmile,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from "react-icons/ai";

const LikePhono = () => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const handleLike = () => {
    if (!like){
        setLike(true);
        setCount(count + 1)
    } else {
        setLike(false);
        setCount(count - 1)
    }
    
  };

  return (
    <div className="container text-center">
      <Title text={"like photo app"} />
      <Title text={`likes ${count}`} />

      <div class="max-w-sm rounded-lg m-auto overflow-hidden shadow-lg  bg-stone-500">
        <div onDoubleClick={handleLike} class="px-6 py-4">
          <h2  class="font-bold text-xl mb-2">Título de la Card</h2>
          <AiFillSmile className="mr-2" />
          <small>DogyDog</small>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2025/04/22/15/39/coffee-machine-9550534_1280.jpg"
          alt="img"
          className="object-cover"
        />
        <footer className="text-sm  flex justify-between p-5">
          <AiOutlineComment className="text-xl" />
          {like ? (
            <AiFillHeart className="text-xl text-red-500" onClick={handleLike} />
          ) : (
            <AiOutlineHeart className="text-xl text-red-500"  onClick={handleLike} />
          )}
        </footer>
      </div>
    </div>
  );
};

export default LikePhono;
