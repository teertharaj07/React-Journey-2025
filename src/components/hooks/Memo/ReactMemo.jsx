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
