import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("isDark") || false);
  const savedTheme = localStorage.getItem("isDark");

  useEffect(() => {
    if (savedTheme === true) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    localStorage.setItem("isDark", isDarkMode ? false : true);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
    >
      {isDarkMode==true ? (
        <>
          <SunIcon className="w-10 h-10 mb-4 text-yellow-400" />

        </>
      ) : (
        <>
          <MoonIcon className="w-10 h-10 mb-4 text-gray-500" />

        </>
      )}
    </button>
  );
};

export default ThemeToggle;