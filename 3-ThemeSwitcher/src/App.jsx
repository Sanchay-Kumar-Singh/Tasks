import { useContext } from "react";
import ThemeText from "./components/ThemeText";
import ThemeButton from "./components/ThemeButton";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <ThemeText />
      <ThemeButton />
    </div>
  );
};

export default App;