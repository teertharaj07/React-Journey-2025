****72:React.memo(): Prevent Unnecessary Re-Renders with React Memo video 71****
In this video, we'll explore React.memo, a powerful tool to optimize your React applications by preventing unnecessary re-renders. You'll learn why React.memo is essential, how to implement it, and see it in action using React Profiler. We’ll also cover different ways to use React.memo in your app, ensuring better performance and a more efficient codebase. For example, we'll discuss how React.memo can help in a component-heavy dashboard app by only re-rendering components that need updating.



----------memo() in react 19 ---------------

---memorization---
React.memo
useMemo
useCallback
React.memo()

* The React.memo function is used for memoization of functional components.

* If the props of a memoized component have not changed, React skips the
rendering for that component, using the cached result instead.

* Do memoizations only when necessary.

OR

React.memo() is a higher-order component that we can use to wrap components that we do not want to re-render unless props within them changes





---why we we used to compilar-----
------------compilar in react-----------

summary :- to prevent the unnacceary re-rendering in react like when changing state and props .

import { useState } from "react";
import { Counts } from "./MemoCount";

export const ReactMemo = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="p-4 h-52 font-display tracking-wider flex flex-col justify-end items-center">
        <h1>{count}</h1>
        <button className="btn bg-cyan-500 py-1 px-3" onClick={()=>setCount(count+1)}>Increment</button>
      </div>
      <Counts /> //re-render
    </>
  );
};
-------

profiler dev tool in crome to record the screen activity and generate report



updated code of child elements 
import { memo, useRef } from "react";

export const Counts = () => {
  const renderCount = useRef(0);
  console.log(renderCount);

  return (
    <>
      <div className="mt-3 font-display text-center">
        <p className="">
          Nothing changed here but I have now rendered:{" "}
          <span className="text-red-600"> {renderCount.current++} time(s)</span>
        </p>
      </div>
    </>
  );
};

// to prevent to the re-render the child elements when parent element re-render
export default memo(Counts);


---------------another way 
import { memo, useRef } from "react";


export const Counts = memo(() => {
  const renderCount = useRef(0);
  console.log(renderCount);

  return (
    <>
      <div className="mt-3 font-display text-center">
        <p className="">
          Nothing changed here but I have now rendered:{" "}
          <span className="text-red-600"> {renderCount.current++} time(s)</span>
        </p>
      </div>
    </>
  );
});

// to prevent to the re-render the child elements when parent element re-render
// export default memo(Counts);