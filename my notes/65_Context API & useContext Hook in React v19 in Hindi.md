****65:-Context API & useContext Hook in React v19 in Hindi*****
In this video, we explore the Context API and useContext Hook in React 19, essential tools for managing state across components without prop drilling. You'll learn why these features are needed, understand the theory, and see a practical implementation with a clear folder structure. We'll also cover the key advantages and how exactly Context API works, using real-life examples to solidify your understanding. 💸 

----------------------------------------
-----------------
Problem with Prop Drilling  

App---> Counter--->Child---->GrandChild--->GrandGrandChild
this is components  sturcute flow

there Counter -- GrandGrandChild want share data

Now, we need counter value in
GrandGrandChild, just passing
from Counter to GrandGrandChild
is not possible.


can we send the data directly imposible

so we will do that the data flow App--Counter--Child---GrandChild--Grand--GrandChild 

it means App to GrandGrandChild data share
this called prop drilling
---------------------------------



-------------solution of this problem----

      Context API

Context API: A way to pass data through the component tree without having to pass props down manually at every level.

+ createContext: Creates a Context object.

+ Provider: A component that provides the context value to its children.

+ useContext (Consumer): A hook that allows you to consume a context. 



-----------------------------------

    Context API

Initial Value: We don't pass an initial value directly to the context. 

Context Creation: createContext returns a Context component, not a variable. 
The first letter of the Context component's name must be uppercase.

Provider Component: The Provider is a property of the Context component. We pass the value to the Provider, which makes it accessible to child components.
The value should be passed inside double curly braces {{ }}1 if it's more then one. 

Consuming Context Data: To access the context data, we use the useContext hook. As a parameter, we pass the entire context to useContext to access all values provided by the Provider. 




------------implementaTION ---


01.create extra data warehouse to store neccery to the varable
that data do you want share your child

create index.jsx file write this code

--------------

01. singal data warehouse

    -----
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


-------

02. multiple data warehouse

------

import { createContext } from "react";

// step : 1 create context(warehouse)
// eslint-disable-next-line react-refresh/only-export-components
export const BioContext = createContext();

// createContext returns a Context Componetnt , not a  variable
// the first letter og the Context component's name must be uppercase.

//step : 2  create provider

export const BioProvider = ({children}) => {
  // this is warehouse that we can store like laptop , computer

  const myName = "teerth";
  const myAge = 21;
  console.log(children);
  

//   return <BioContext.Provider value={myName}>
//     {children}
//   </BioContext.Provider>;

//*multiple data
return <BioContext.Provider value={{myName,myAge}}>
{children}
</BioContext.Provider>;
};
----




--------------------------------------------------------------------

02. this is main prarent components file
  App.jsx

  ------
  import { BioProvider } from "./components/hooks/ContextAPI";
import { About } from "./components/hooks/ContextAPI/About.jsx";
import { Home } from "./components/hooks/ContextAPI/Home.jsx";

const App = () => {
  
  return(
  <BioProvider>
    <Home />
    <About />
  </BioProvider>
  );
};

export default App;


--------



-------------------------------------
03. child componets like home page for Home.jsx

import { useContext } from "react";
import { BioContext } from ".";

//to get the myName value

export const Home = () => {
    //*single data 
//   const  myName  = useContext(BioContext);


//*mulitiple data
  const  {myName,myAge}  = useContext(BioContext);

//   return <h1>Hello Context API .my name is {myName}</h1>;
  return <h1>Hello Context API .my name is {myName} and my age is {myAge} yrs old</h1>;
};



---------------------------------

03..anther child like about for About.jsx


import { useContext } from "react";
import { BioContext } from ".";

//to get the myName value
export const About = () => {

//* multiple data
  const  {myName,myAge}  = useContext(BioContext);

//   return <h1>Hello Context API .my name is {myName}</h1>;
  return <h1>Hello this is about page <br /> my name is {myName} and my age is {myAge} yrs old</h1>;
};
