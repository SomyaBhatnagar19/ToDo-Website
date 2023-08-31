import React, { useState } from "react";

//images
import darkBg from "../Assets/bg-dark.jpg";
import lightBg from "../Assets/bg-light.jpg";

//icons
import darkMode from "../Assets/moon-mode.png";
import lightMode from "../Assets/sun-mode.png";

//files
import Login from "./Login";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [theme, setTheme] = useState("dark");

  const handleLogin = () => {
    setShowLogin(true);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const backgroundImage = theme === "dark" ? darkBg : lightBg;

  return (
    <div
      className="flex items-center justify-between px-2 py-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <h4 className="text-lg font-semibold text-xl text-white ml-9">TO DO</h4>
      <button
        onClick={handleLogin}
        className="ml-auto g-2 bg-transparent hover:bg-purple-600 text-white border border-gray-300 py-2 px-4 rounded transition duration-300"
      >
        Login
      </button>
      {showLogin && <Login />}
      <button onClick={toggleTheme} className="text-white mx-4">
        <img
          src={theme === "dark" ? lightMode : darkMode}
          alt="Theme Icon"
          className="w-6 h-6 mx-auto transition-transform transform-gpu hover:rotate-180"
        />
      </button>
    </div>
  );
};

export default Header;
