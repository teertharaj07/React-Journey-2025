*****73:useMemo Hook in React 19: Why, When & How to Use It with Practical Examples 72 video****

Welcome to useMemo hook in React 19 in Hindi, exploring why it's important, when to use it, and how to implement it effectively. You'll learn how to optimize your React applications by preventing unnecessary re-computations with practical examples. By the end, you'll be equipped to apply useMemo in your projects, making your apps faster and more efficient. 💸 

-----------------
useMemo Hook

const memoizedValue = useMemo (() => { // Your computation logic here

return computedValue;
}, [dependencies]);


* useMemo is a React Hook used for memoization.

* Memoization is a technique to optimize performance by caching the results of expensive function calls.

* Use it when you want to prevent unnecessary re-execution of a function on every render. 

* Useful for optimizing performance in situations where calculations or operations are computationally expensive.

* Overusing useMemo might lead to unnecessary complexity and impact readability.






import {  memo, useState } from "react";

// eslint-disable-next-line react/display-name
const ExpensiveComponent = memo(() => {
  //   Expensive calculation function
  const sum = () => {
    console.log("Calculating sum...");
    let i = 0;
    for (i = 0; i <= 1000000000; i++) {
      i = i + 1;
    }
    return i;
  };



    const total = sum();

  return <p> sum: {total} </p>;
});



const MemoParentComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white ">
      <ExpensiveComponent />
      <button
        onClick={() => setCount(count + 1)}
        className="py-3 px-6 bg-cyan-400 rounded-sm"
      >
        Re-render Parent
      </button>
      <p>Parent re-renders: {count}</p>
    </div>
  );
};

export default MemoParentComponent;








import { useMemo, useState } from "react";

const ExpensiveComponent = () => {
  //   Expensive calculation function
  const sum = () => {
    console.log("Calculating sum...");
    let i = 0;
    for (i = 0; i <= 1000000000; i++) {
      i = i + 1;
    }
    return i;
  };

  const total = useMemo(() => sum(), []);

  //   const total = sum();

  return <p> sum: {total} </p>;
};

const MemoParentComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white ">
      <ExpensiveComponent />
      <button
        onClick={() => setCount(count + 1)}
        className="py-3 px-6 bg-cyan-400 rounded-sm"
      >
        Re-render Parent
      </button>
      <p>Parent re-renders: {count}</p>
    </div>
  );
};

export default MemoParentComponent;