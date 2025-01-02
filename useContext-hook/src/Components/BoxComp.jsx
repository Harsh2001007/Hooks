import React, { useContext } from "react";
import { ThemeContext } from "../App";

function BoxComp() {
  const { darkTheme, newData, setNewData } = useContext(ThemeContext);

  const themeStyle = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <div style={themeStyle}>
      BoxComp
      <div>{newData}</div>
    </div>
  );
}

export default BoxComp;
