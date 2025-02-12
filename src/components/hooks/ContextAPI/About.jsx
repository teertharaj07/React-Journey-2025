import { useContext } from "react";
import { BioContext } from ".";

//to get the myName value
export const About = () => {
  const { myName, myAge } = useContext(BioContext);

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
