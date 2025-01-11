import { useState } from "react";

export const State = () => {
  // let value = 0;
  // const handleButtonClick = () => {
    // value++;
    // console.log(value);
    
  // };
  // console.log(useState());
  // let array=useState();
  // let [count,setCount]=useState();
  // console.log(array);
  let [count,setCount]=useState(0);
 const handleButtonClick=()=>{
  setCount(()=> count+1);
 }
  console.log(count);
   
  

  return (
    <>
     <section className="main-div">
     <h1>{count}</h1>
     <button onClick={handleButtonClick}>Increment</button>
     </section>
    </>
  );
};
