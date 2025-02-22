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
