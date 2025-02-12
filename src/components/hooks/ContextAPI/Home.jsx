// export const Home=()=>{
//     return (
//     <h1>Hello Context API</h1>

//     );
// }

import { useContext } from "react";
import { BioContext } from ".";

//to get the myName value
export const Home = () => {
//   const  myName  = useContext(BioContext);
//*mulitiple data
  const  {myName,myAge}  = useContext(BioContext);

//   return <h1>Hello Context API .my name is {myName}</h1>;
  return <h1>Hello Context API .my name is {myName} and my age is {myAge} yrs old</h1>;
};
