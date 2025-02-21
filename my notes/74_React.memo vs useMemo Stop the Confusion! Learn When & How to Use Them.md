****74:React.memo vs useMemo: Stop the Confusion! Learn When & How to Use Them 73 video****
In this video, we dive deep into the differences between React.memo and useMemo, two powerful tools for optimizing React applications. Learn when and how to use each effectively to prevent unnecessary re-renders and boost your app's performance. Through a real-life example, we’ll demonstrate common pitfalls and how to resolve them using these hooks, ensuring your React components run efficiently. Don't miss out on these essential tips to level up your React skills! 💸 

========use Memo vs React.Memo==========

import { useState } from "react";
// import  Counts  from "./MemoCount";
import  {Counts}  from "./MemoCount";

const ReactMemo = () => {
  const [count, setCount] = useState(0);

const myBioData={
  name:"thapa",
  age:30,

};

  return (
    <>
      <div className="p-4 h-52 font-display tracking-wider flex flex-col justify-end items-center">
        <h1>{count}</h1>
        <button
          className="btn bg-cyan-500 py-1 px-3"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
      <Counts biodata={myBioData} />
    </>
  );
};

export default ReactMemo;



---------------
import { useState } from "react";
// import  Counts  from "./MemoCount";
import  {Counts}  from "./MemoCount";

const ReactMemo = () => {
  const [count, setCount] = useState(0);

const myBioData={
  name:"thapa",
  age:30,

};

  return (
    <>
      <div className="p-4 h-52 font-display tracking-wider flex flex-col justify-end items-center">
        <h1>{count}</h1>
        <button
          className="btn bg-cyan-500 py-1 px-3"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
      <Counts biodata="teerth" />
    </>
  );
};

export default ReactMemo;
-------
React. memo! 0)
|
+ The React.memo function is used for memoization of functional components. |
+ If the props of a memoized component have not changed, React skips the |
rendering for that component, using the cached result instead. |
+ Do memoizations only when necessary. |
OR Z |
React.memo() is a that we can use to wrap
components that we do not want to re-render unless props within them change





------------------
import { useState } from "react";
// import  Counts  from "./MemoCount";
import  {Counts}  from "./MemoCount";

const ReactMemo = () => {
  const [count, setCount] = useState(0);

const myBioData={
  name:"teerth",
  age:20,

};

  return (
    <>
      <div className="p-4 h-52 font-display tracking-wider flex flex-col justify-end items-center">
        <h1>{count}</h1>
        <button
          className="btn bg-cyan-500 py-1 px-3"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
      <Counts bioData={myBioData} />
    </>
  );
};

export default ReactMemo;


----
import { memo, useRef } from "react";


// eslint-disable-next-line react/display-name
export const Counts = memo(({bioData}) => {
  const renderCount = useRef(0);
  console.log(renderCount);

  return (
    <>
      <div className="mt-3 font-display text-center">
        <p className="">
          Nothing changed here but I have now rendered:{" "}
          <span className="text-red-600"> {renderCount.current++} time(s)</span>
        </p>
        <p>{bioData.name}</p>
      </div>
    </>
  );
});

// to prevent to the re-render the child elements when parent element re-render
// export default memo(Counts);
===================================

import { useMemo, useState } from "react";
// import  Counts  from "./MemoCount";
import { Counts } from "./MemoCount";

const ReactMemo = () => {
  const [count, setCount] = useState(0);

  // const myBioData={
  //   name:"teerth",
  //   age:20,

  // };

  const myBioData = useMemo(() => {
    return {
      name: "teerth",
      age: 20,
    };
  }, []);

  return (
    <>
      <div className="p-4 h-52 font-display tracking-wider flex flex-col justify-end items-center">
        <h1>{count}</h1>
        <button
          className="btn bg-cyan-500 py-1 px-3"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
      <Counts bioData={myBioData} />
    </>
  );
};

export default ReactMemo;
-----

import { memo, useRef } from "react";


// eslint-disable-next-line react/display-name
export const Counts = memo(({bioData}) => {
  const renderCount = useRef(0);
  console.log(renderCount);

  return (
    <>
      <div className="mt-3 font-display text-center">
        <p className="">
          Nothing changed here but I have now rendered:{" "}
          <span className="text-red-600"> {renderCount.current++} time(s)</span>
        </p>
        <p>{bioData.name}</p>
      </div>
    </>
  );
});

// to prevent to the re-render the child elements when parent element re-render
// export default memo(Counts);