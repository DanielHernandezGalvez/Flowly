import React, { useState, useEffect } from "react";
import Blog from "./Blog";
import { ThemesContext, themes } from "./context/theme-context";

const DarkTheme = () => {
  const [theme, setTheme] = useState(themes.light);

  const changeTheme = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  };

  let docBody = document.body;

  useEffect(() => {
    switch (theme) {
      case themes.dark:
        docBody.classList.remove("bg-gray-900");
        docBody.classList.remove("text-white");
        docBody.classList.add("bg-gray-200");
        docBody.classList.add("text-stone-900");
        break;
      case themes.light:
        docBody.classList.remove("bg-gray-200");
        docBody.classList.remove("text-stone-900");
        docBody.classList.add("bg-gray-900");
        docBody.classList.add("text-white");
    }
  }, [theme]);

  return (
    <ThemesContext.Provider value={{ theme, changeTheme }}>
      <Blog theme={theme} />
    </ThemesContext.Provider>
  );
};

export default DarkTheme;
