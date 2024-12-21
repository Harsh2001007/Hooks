import { createContext, useContext, useState } from "react";
import BoxComp from "./Components/BoxComp";

export const ThemeContext = createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevState) => !prevState);
  };
  return (
    <>
      <h1>useContext-Hook</h1>
      <button onClick={toggleTheme}>toggle</button>
      <ThemeContext.Provider value={darkTheme}>
        <BoxComp />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
