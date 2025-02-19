****71:Best Practices for Using the useReducer Hook in React 19: Optimize Your State Management 70 video****
In this video, we dive deep into best practices for using the useReducer hook in React 19. You'll learn how to set up useReducer correctly, implement a reset button, and optimize your state management with initial values and switch statements. By understanding how to handle objects as the initial state and effectively use the spread operator, you can create cleaner, more efficient code. We'll also discuss real-life applications, like how to manage the state of a form with multiple inputs using useReducer, enhancing your React projects. 



------improved useReducer()----------
       useReducer() hook
const [count, dispatch] = useReducer(reducer,0)


--
syntax breack down

const :- variable (key)
count :- state Variable The current state value 
dispatch :- To send actions to the reducer function
0 :- the initial value of the state.

Reducer Function: A function that takes the current state and an action as argument 
returns a new state.


-----notes-
 </button>
        <button
          className="h-20 w-40 bg-red-800 font-semibold"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>

            if (action.type === "RESET") {
      return state=0;
    }


    same here---

      <button
          className="h-20 w-40 bg-red-800 font-semibold"
          onClick={() => dispatch({ teerth: "RESET" })}
        >
          Reset
        </button>

            if (teerth.type === "RESET") {
      return state=0;
    }




    -------------
    import { useReducer } from "react";

export const ReducerComp = () => {
  const initialState = {
    count: 0,
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
        return {count:state.count+1};

      case "DECREMENT":
        return {count:state.count-1};
      case "RESET":
        return {count:0};
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
