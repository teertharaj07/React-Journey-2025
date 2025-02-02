//* useState Challenge Description:
//? Create a simple React component that allows users to increment and decrement a counter using two buttons.

//? Reset Button: Add a button to reset the count to zero.

//? Limitations: Set a maximum and minimum limit for the counter and disable the buttons when those limits are reached.

//? Step Increment: Add an input field to allow users to set the step value by which the counter should increment or decrement.

// import { useState } from "react";
// import "../Hooks.css";

//  const CounterChallenge = () => {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(0);

//   const handleIncrement = () => {
//     setCount(count + step);
//   };

//   const handleDecrement = () => {
//     setCount(count - step);

//   };

//   const handleReset = () => {
//     setCount(0);
//   };

//   return (
//     <div className="container state-container">
//       <h1>useState Challenge</h1>
//       <h1>Counter App</h1>

//       <p>
//         Count: <span> {count} </span>
//       </p>

//       <div>
//         <label>
//           Step:
//           <input
//             type="number"
//             // value={step}
//             onChange={(e) => setStep(Number(e.target.value))}
//           />
//         </label>
//       </div>

//       <div className="grid-three-cols">
//         <button onClick={handleIncrement} disabled={count >= 100}>
//           Increment
//         </button>
//         <button onClick={handleDecrement} disabled={count <= 0}>
//           Decrement
//         </button>
//         <button onClick={handleReset}>Reset</button>
//       </div>
//     </div>
//   );
// };




// import { useState } from "react";

// function CounterChallenge() {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);
//   const [history, setHistory] = useState([]);

//   const handleIncrement = () => {
//     setCount(prevCount => prevCount + Number(step));
//     setHistory(prevHistory => [...prevHistory, `Incremented by ${step}`]);
//   };

//   const handleDecrement = () => {
//     setCount(prevCount => prevCount - Number(step));
//     setHistory(prevHistory => [...prevHistory, `Decremented by ${step}`]);
//   };

//   const handleReset = () => {
//     setCount(0);
//     setStep(1);
//     setHistory([]);
//   };

//   return (
//     <div className="counter-container">
//       <h1>useState Challenge</h1>
//       <p>Count: <span className="count">{count}</span></p>
//       <label>Step: </label>
//       <input
//         type="number"
//         value={step}
//         onChange={(e) => setStep(e.target.value)}
//       />
//       <div className="buttons">
//         <button onClick={handleIncrement}>Increment</button>
//         <button onClick={handleDecrement}>Decrement</button>
//         <button onClick={handleReset}>Reset</button>
//       </div>
//       <h2>History</h2>
//       <ul>
//         {history.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }



import { useState } from "react";
import "../Hooks.css";
 function CounterChallenge() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + Number(step));
    setHistory(prevHistory => [...prevHistory, `Incremented by ${step}`]);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - Number(step));
    setHistory(prevHistory => [...prevHistory, `Decremented by ${step}`]);
  };

  const handleReset = () => {
    setCount(0);
    setStep(1);
    setHistory([]);
  };

  return (
    <div className="container state-container">
      <h1>useState Challenge</h1>
      <p>Count: <span className="count">{count}</span></p>
      <div>
        <label>Step: </label>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(e.target.value)}
        />
      </div>
      <div className="grid-three-cols">
        <button onClick={handleIncrement} disabled={count >= 100}>Increment</button>
        <button onClick={handleDecrement} disabled={count <= 0}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <button className="history-button" onClick={() => setShowHistory(!showHistory)}>
        {showHistory ? "Hide History" : "Show History"}
      </button>
      {showHistory && (
        <div>
          <h2>History</h2>
          <ul>
            {history.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}


export default CounterChallenge;
