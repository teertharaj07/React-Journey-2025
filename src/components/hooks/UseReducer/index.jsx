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
  const initialState = {
    count: 0,
    inc:2,
    dec:2,
  };

  const reducer = (state, action) => {
    console.log(state, action);
    // if (action.type === "INCREMENT") {
    //   return state + 1;
    // }
    // if (action.type === "DECREMENT") {
    //   return state - 1;
    // }

    // if (action.type === "RESET") {
    //   return (state=0);
    // }
    // return state;

    switch (action.type) {
      case "INCREMENT":
        return { ...state,count:state.count+1};

      case "DECREMENT":
        return { ...state,count:state.count-1};
      case "RESET":
        return { ...state,count:0};
      default:
         return state;
    }
    
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="p-4 h-lvh flex flex-col justify-center items-center bg-cyan-600 text-white">
        <h1>Hello useReducer Hook</h1>
        <h2>{state.count}</h2>
        <button
          className="h-20 w-40 bg-red-800 m-3 font-semibold"
          onClick={() => dispatch({ type: "INCREMENT" })} // Fixed typo here
        >
          Increment
        </button>
        <button
          className="h-20 w-40 bg-red-800 font-semibold m-4"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
        <button
          className="h-20 w-40 bg-red-800 font-semibold"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>
    </>
  );
  };
