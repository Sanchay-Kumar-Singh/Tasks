import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeButton = () => {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="mt-6 rounded-xl bg-blue-500 px-6 py-3 text-white"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeButton;