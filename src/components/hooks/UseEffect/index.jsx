// // import { useEffect, useState } from "react";
// // import "./index.css";

// // export const ReactUseEffect = () => {
// //   const [count, setCount] = useState(0);

// //   useEffect(() => {
// //     console.log("count value:", count);
// //   }, [count]);

// //   return (
// //     <div className="container effect-container">
// //       <h1>useEffect Hook</h1>
// //       <p>Count: {count}</p>
// //       <button onClick={() => setCount(count + 1)}>Increment</button>
// //     </div>
// //   );
// // };

// import { useEffect, useState } from "react";
// import "./index.css";

// export const ReactUseEffect = () => {
//   const [date, setDate] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       const updatedDate = new Date();
//       setDate(updatedDate.toLocaleTimeString());
//     }, 1000);
//   }, []);

//   return (
//     <div className="container effect-container">
//       <h1> Date : {date} </h1>
//     </div>
//   );
// };

//-------
import { useEffect,useState } from "react";
import "./index.css";
export const ReactUseEffect = () => {

  const [count, setCount] = useState(0);
  const [date,setDate]=useState(0)

  useEffect(() => {
    setInterval(()=>{
      const updatedDate=new Date();
      setDate(updatedDate.toLocaleTimeString());
    },1000)
    // console.log("hello useEffect");// only one time render 
    // console.log("count value",count);
  
  }, []);
  return (
    <div>
      {/* <h1>hello, useEffect example 1</h1>
      <div className="container effect-container">
        <h1>useEffect Hook example 2</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div> */}
      <h1>example 3</h1>
      <h1> Date:{date}</h1>
    </div>
  );
};
