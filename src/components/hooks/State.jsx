import { useState } from "react";

export const State = () => {
  let [count, setCount] = useState(0);
  console.log("Parent Components renderd");

  const handleButtonClick = () => {
    setCount(() => count + 1);
  };
  console.log(count);

  return (
    <>
      <div className="main-div">
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Increment</button>
      </div>
      <ChildComponent count={count} />
    </>
  );
};

function ChildComponent({ count }) {
  console.log("Child Components renderd");
  return <div>Child Componets-{count}</div>;
}
