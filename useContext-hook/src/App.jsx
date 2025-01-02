import { createContext, useContext, useState } from "react";
import BoxComp from "./Components/BoxComp";

export const ThemeContext = createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [newData, setNewData] = useState("data 1");

  const contextValues = {
    darkTheme,
    newData,
    setNewData,
  };

  const toggleTheme = () => {
    setDarkTheme((prevState) => !prevState);
    setNewData("data changed");
  };
  return (
    <>
      <h1>useContext-Hook</h1>
      <button onClick={toggleTheme}>toggle</button>
      <ThemeContext.Provider value={contextValues}>
        <BoxComp />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
