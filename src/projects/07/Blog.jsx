import React, { useContext } from "react";
import Title from "../components/Title";
import { ThemesContext } from "./context/theme-context";

const Blog = () => {
  const { theme, changeTheme } = useContext(ThemesContext);

  return (
    <div className="container flex flex-col justify-center items-center h-[60vh] w-full mx-auto">
      <Title text={`my blog with ${theme} theme`} />
      <span className="text-center text-gray-500 text-lg max-w-[600px] mt-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil commodi
        esse ex fugiat adipisci fugit nobis asperiores, error neque laudantium
        provident, quo, molestiae saepe nulla unde blanditiis? Dolores, maiores
        distinctio.
      </span>
      <button
        onClick={changeTheme}
        className={`${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-gray-200 text-stone-900"
        } px-5 py-2 rounded-md mt-5`}
      >
        {theme}
      </button>
    </div>
  );
};

export default Blog;
