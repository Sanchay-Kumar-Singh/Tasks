import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeText = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">
        Theme Switcher
      </h1>

      <p className="mt-4 text-2xl">
    {dark ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </p>
    </div>
  );
};

export default ThemeText;