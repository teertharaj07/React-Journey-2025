*****67:Create Custom Hooks in React 19: Step-by-Step Guide with Best Practices 66 video***

Learn how to create custom hooks in React 19 with this step-by-step guide. Understand why custom hooks are essential, the rules for creating them, and how to implement error handling effectively. This tutorial will help you write cleaner, more reusable code in your React projects. Perfect for developers looking to enhance their React skills with practical, real-world examples. 0:00 Intro 0:30 Why We Need Custom Hooks in React 1:40 Essential Rules for Creating Custom Hooks 3:55 Step-by-Step Guide to Creating a Custom Hook 5:50 How to Use Custom Hooks to Fetch Data 7:55 Error Handling in Custom Hooks 11:35 Next Video Update and What’s Coming Next

-------------------------------------------
      CUSTOM HOOK IN REACT

 Creating custom hooks in React is a powerful way to encapsulate logic and make your components cleaner and more maintainable.

1. Prefix with use: Custom hooks must start with the word use. This convention ensures
that hooks are easily identifiable and adhere to the hook rules.

2. Use Built-in Hooks: Custom hooks should utilize React's built-in hooks (e.g., useState,useEffect, useContext) to leverage React's state and lifecycle features.

3. Avoid Side Effects Outside Hooks: Side effects (e.g., data fetching, subscriptions) should be managed within hooks using useEffect or other appropriate hooks.

4. Keep Hooks Pure: Hooks should be free from side effects and return values or fun

 that the component can use.


----------------
New Rule DRY --Do not Repeat Yourself

---index.jsx----
next Dark & Light Mode website

import { createContext, useContext } from "react";

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
  const context = useContext(BioContext);
  if (context===undefined) {
    throw new Error("Components must be wrappd with BioProvider")
  }
  return context;
};


-----about.jsx use
import { useBioContext } from ".";

//to get the myName value
export const Home = () => {
//   const  myName  = useContext(BioContext);
//*mulitiple data
  // const  {myName,myAge}  = useContext(BioContext);
  const  {myName,myAge}  = useBioContext();

//   return <h1>Hello Context API .my name is {myName}</h1>;
  

  return (
    <section
      className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-white-900 text-white`}
    >
      <h1>Hello Context API .my name is {myName} and my age is {myAge} yrs old</h1>
      ;
    </section>
  );

};
