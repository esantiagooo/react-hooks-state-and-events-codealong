import React from "react";
import { useState } from "react";
// import useState 
function Toggle() {
  const [isOn, setIsOn] = useState(false);
  // set up a state variable and provide an initial value
  

function handleClick(){
  setIsOn((isOn) => !isOn)
}
const color = isOn ? "red" : "white";
  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
