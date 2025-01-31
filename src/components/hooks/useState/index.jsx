import { useState } from "react";
import "../Hooks.css";

export const Counter = () => {
  // console.log(useState());
  // console.log(useState(6));
  const [Count, setCount] = useState(0);
  const handleINcrement = () => {
    setCount(Count + 1);
    console.log("inner",Count);
    
  };
  console.log("outer",Count);

  return (
    <div
      className="container state-container"
      style={{
        textAlign: "center",
      }}
    >
      <h1>useState Hook!</h1>
      <br />
      <p>{Count}</p>
      {/* <button className="state-button" onClick={()=>setCount(Count+1)} >INcrement</button> */}
      <button className="state-button" onClick={handleINcrement}>
        INcrement
      </button>
    </div>
  );
};
