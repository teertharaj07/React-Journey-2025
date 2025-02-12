// import { createContext } from "react";

// // step : 1 create context(warehouse)
// // eslint-disable-next-line react-refresh/only-export-components
// export const BioContext = createContext();

// // createContext returns a Context Componetnt , not a  variable
// // the first letter og the Context component's name must be uppercase.

// //step : 2  create provider

// export const BioProvider = () => {
//   // this is warehouse that we can store like laptop , computer

//   const myName = "teerth";

//   return <BioContext.Provider value={myName}>
//
//   </BioContext.Provider>;
// };

import { use } from "react";
// import { createContext, useContext } from "react";
import { createContext } from "react";

// step : 1 create context(warehouse)
// eslint-disable-next-line react-refresh/only-export-components
export const BioContext = createContext();

// createContext returns a Context Componetnt , not a  variable
// the first letter og the Context component's name must be uppercase.

//step : 2  create provider

export const BioProvider = ({ children }) => {
  // this is warehouse that we can store like laptop , computer

  const myName = "teerth";
  const myAge = 21;
  console.log(children);

  //   return <BioContext.Provider value={myName}>
  //     {children}
  //   </BioContext.Provider>;

  //*multiple data
  return (
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};

// custom hooks
export const useBioContext = () => {
  // const context = useContext(BioContext);

  // react 19 new hook "use"
  const context = use(BioContext);
  if (context===undefined) {
    throw new Error("Components must be wrappd with BioProvider")
  }
  return context;
};
