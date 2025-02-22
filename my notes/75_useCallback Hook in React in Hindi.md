****75:useCallback Hook in React in Hindi 74 video***
In this video, we explore the useCallback hook in React 19, a crucial tool for preventing unnecessary re-renders in your components. We'll guide you through understanding the common issues that arise in React applications and demonstrate how to effectively use the useCallback hook to optimize performance. Through real-life coding examples, you'll learn when and why to use useCallback, how to memoize functions, and the advantages it brings when combined with React.memo and useMemo. This tutorial is essential for anyone looking to write more efficient and performant React code. 💸

--React useCallback Hook---

----
import { useState } from "react";
const Button =({onClick,children})=>{
    console.log(`Rendering: ${children}`);

    return(
        <button
         className={`text-black mb-4 py-2 px-5 ${children==="Increment" ?"bg-green-400":"bg-red-400"}`}
         onClick={onClick}
        >
       {children}
        </button>
    );

    
}

export default function UseCallback(){
    const [count,setCount]=useState(0);

    //Memoize the increment function
    const increment=()=>{
        console.log("increment inside");
        setCount((preCount)=>preCount+1)
        
    };

   //Memoize the decrement function
   const decrement =()=>setCount((preCount)=>preCount-1);

   return(
    <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center text-white">
       
      <h1 className="mb-4"> Count :{count} </h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>

    </div>
   );

}



-----------------
useMemo and useCallback are both hooks
that can be used to optimize applications
by memoizing values or functions.


import { useState ,memo} from "react";
// eslint-disable-next-line react/display-name
const Button = memo(({ onClick, children }) => {
  console.log(`Rendering: ${children}`);

  return(
      <button
       className={`text-black mb-4 py-2 px-5 ${children==="Increment" ?"bg-green-400":"bg-red-400"}`}
       onClick={onClick}
      >
     {children}
      </button>
  );

//   return <button onClick={onClick}>{children}</button>;
});

export default function UseCallback() {
  const [count, setCount] = useState(0);

  //Memoize the increment function
  const increment = () => {
    console.log("increment inside");
    setCount((preCount) => preCount + 1);
  };

  //Memoize the decrement function
  const decrement = () => setCount((preCount) => preCount - 1);

  return (
    <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white">
      <h1 className=" text-white mb-4"> Count :{count} </h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
}


--------------
import { useState ,memo, useCallback} from "react";
// eslint-disable-next-line react/display-name
const Button = memo(({ onClick, children }) => {
  console.log(`Rendering: ${children}`);

  return(
      <button
       className={`text-black mb-4 py-2 px-5 ${children==="Increment" ?"bg-green-400":"bg-red-400"}`}
       onClick={onClick}
      >
     {children}
      </button>
  );

//   return <button onClick={onClick}>{children}</button>;
});

export default function UseCallback() {
  const [count, setCount] = useState(0);

  //Memoize the increment function
//   const increment = () => {};

// useCallback 
const increment = useCallback(()=>{
    console.log("increment inside");
    setCount((preCount) => preCount + 1);
},[])


  //Memoize the decrement function
//   const decrement = () => setCount((preCount) => preCount - 1);

  const decrement = useCallback(()=>{
    console.log("decrement inside");
    setCount((preCount) => preCount - 1);

},[])


  return (
    <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white">
      <h1 className=" text-white mb-4"> Count :{count} </h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
}
