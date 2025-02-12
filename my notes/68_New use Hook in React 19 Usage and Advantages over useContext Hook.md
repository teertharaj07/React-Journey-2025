*****68: New "use" Hook in React 19: Usage, and Advantages over useContext Hook 67 video*****
In this video, we dive into the new "use" hook introduced in React 19, explaining how it works, the rules for using it, and how it compares to the useContext hook. With practical examples, you’ll learn why this hook is a game-changer and how it can simplify your code. Ideal for developers eager to stay up-to-date with React’s latest features. 💸

----------------------------------------------------

react 19 New API -USE

new hook in react 19  name of "use"
-----
export const useBioContext = () => {
  // const context = useContext(BioContext);

  // react 19 new hook "use"
  const context = use(BioContext);
  if (context===undefined) {
    throw new Error("Components must be wrappd with BioProvider")
  }
  return context;
};

-------
about.jsx

const newHook=true;
if(newHook){
  const { myName, myAge } = useContext(BioContext);

}



React Hook "useContext" is called conditionally. React Hooks must be called in the exact same order in every component render.eslintreact-hooks/rules-of-hooks
(alias) useContext<any>(context: React.Context<any>): any
import useContext
Accepts a context object (the value returned from React.createContext) and returns the current context value, as given by the nearest context provider for the given context.

@version — 16.8.0



problem solve

const newHook=true;
let myName,myAge;
if(newHook){
  // const { myName, myAge } = useContext(BioContext);
  ( { myName, myAge } = use(BioContext))

}

-----

const newHook=true;
let myName,myAge;
if(newHook){
  // const { myName, myAge } = useContext(BioContext);

  //here any hook you can not used to in conditions

  ( { myName, myAge } = use(BioContext))
  // but here any  use hook  used toin conditions

}
