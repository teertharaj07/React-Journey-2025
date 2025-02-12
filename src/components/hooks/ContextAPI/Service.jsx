// import { useContext } from "react";
// import { BioContext } from ".";

import { useBioContext } from ".";

//to get the myName value
export const Service = () => {
  // const { myName, myAge } = useContext(BioContext);
    const  {myName,myAge}  = useBioContext();

  return (
    <section
      className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-white-900 text-white`}
    >
      <h1>
        Hello this is Service page <br /> my name is {myName} and my age is
        {myAge} yrs old
      </h1>
      ;
    </section>
  );
};
