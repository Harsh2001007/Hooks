import React from "react";
import { useRef } from "react";

function App() {
  const inputRef = useRef();
  const focusShift = () => {
    console.log(inputRef.current.value);
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusShift}>focus</button>
    </div>
  );
}

export default App;
