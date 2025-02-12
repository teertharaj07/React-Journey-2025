// import { useContext } from "react";
import { BioContext } from ".";
import { use, useContext } from "react";

//to get the myName value
export const About = () => {
  // const { myName, myAge } = useContext(BioContext);
  // const { myName, myAge } = useBioContext();;
  
  // react 19 nre hook use
  // const { myName, myAge } = use(BioContext);


const newHook=true;
let myName,myAge;
if(newHook){
  // const { myName, myAge } = useContext(BioContext);

  //here any hook you can not used to in conditions

  ( { myName, myAge } = use(BioContext))
  // but here any  use hook  used toin conditions

}


  return (
    <section
      className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-white-900 text-white`}
    >
      <h1>
        Hello this is about page <br /> my name is {myName} and my age is
        {myAge} yrs old
      </h1>
      ;
    </section>
  );
};
