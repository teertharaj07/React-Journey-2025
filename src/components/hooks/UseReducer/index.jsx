// import { useReducer } from "react";
// // import { useState } from "react";

// export const ReducerComp = () => {
//   const reducer = (state, action) => {
//     console.log(state, action);
//     if (action.type === "INCREMENT") {
//       return state + 1;
//     }
//     if (action.type === "DECREMENT") {
//       return state - 1;
//     }
//   };

//   // const [count,setCount]=useState(1);
//   const [count, dispatch] = useReducer(reducer, 4);

// //   console.log(useReducer(reducer, 0));

//   return (
//     <>
//       <div className="p-4 h-lvh flex flex-col justify-center items-center bg-cyan-600 text-white">
//         <h1>Hello useRedcer Hook</h1>
//         <h2>{count}</h2>
//         <button
//           className="h-20 w-40 bg-red-800 m-3 font-semibold"
//           onClick={() => dispatch({ type: "INCREMENET" })}
//         >
//           Increment
//         </button>
//         <button
//           className="h-20 w-40 bg-red-800 font-semibold"
//           onClick={() => dispatch({ type: "DECREMENT" })}
//         >
//           Decrement
//         </button>
//       </div>
//     </>
//   );
// };



import { useReducer } from "react";

export const ReducerComp = () => {
  const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "INCREMENT") {
      return state + 1;
    }
    if (action.type === "DECREMENT") {
      return state - 1;
    }
    return state; // Always return state for unknown actions
  };

  const [count, dispatch] = useReducer(reducer, 4);

  return (
    <>
      <div className="p-4 h-lvh flex flex-col justify-center items-center bg-cyan-600 text-white">
        <h1>Hello useReducer Hook</h1>
        <h2>{count}</h2>
        <button
          className="h-20 w-40 bg-red-800 m-3 font-semibold"
          onClick={() => dispatch({ type: "INCREMENT" })} // Fixed typo here
        >
          Increment
        </button>
        <button
          className="h-20 w-40 bg-red-800 font-semibold"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
      </div>
    </>
  );
};
