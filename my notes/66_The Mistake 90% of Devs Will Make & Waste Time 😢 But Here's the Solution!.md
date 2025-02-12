****66:The Mistake 90% of Devs Will Make & Waste Time  But Here's the Solution! 65 video******

In this video, we address a common error in React 19 that occurs when trying to access data from a component placed outside the Provider component. Learn why this issue happens, understand the importance of the Context API, and see a practical example of how to avoid this error. This tutorial is essential for React developers who want to ensure their apps run smoothly and avoid common pitfalls. 💸


----
this code child not access value of parrent 
// import { UseRef } from "./components/hooks/useRefs";

// import { ForwordRefs } from "./components/hooks/useRefs/ForwordRef";

// import { UseId } from "./components/hooks/UseID";

// import { ParentComponet } from "./components/PropDrilling";

import { BioProvider } from "./components/hooks/ContextAPI";
import { About } from "./components/hooks/ContextAPI/About.jsx";
import { Home } from "./components/hooks/ContextAPI/Home.jsx";
import { Service } from "./components/hooks/ContextAPI/Service.jsx";

const App = () => {
  // return <UseRef />
  // return <ForwordRefs />
  // return <UseId />
  // return <ParentComponet />
  return (
    <>
      <BioProvider>
        <Home />
        <About />
      
      </BioProvider>
      <Service />
      
    </>
  );
};

export default App;
---------

summary :-

In the Context API, the data provided by a context can only be accessed by the components that are its children within the component tree. This means that any component that needs access to the context data must be a descendant of the provider component that supplies the context value.

-------

error free code

// import { UseRef } from "./components/hooks/useRefs";

// import { ForwordRefs } from "./components/hooks/useRefs/ForwordRef";

// import { UseId } from "./components/hooks/UseID";

// import { ParentComponet } from "./components/PropDrilling";

import { BioProvider } from "./components/hooks/ContextAPI";
import { About } from "./components/hooks/ContextAPI/About.jsx";
import { Home } from "./components/hooks/ContextAPI/Home.jsx";
import { Service } from "./components/hooks/ContextAPI/Service.jsx";

const App = () => {
  // return <UseRef />
  // return <ForwordRefs />
  // return <UseId />
  // return <ParentComponet />
  return (
    <>
      <BioProvider>
        <Home />
        <About />
        <Service />
      </BioProvider>
      
      
    </>
  );
};

export default App;



---------
ContextAPI - Notes

In the Context API, the data provided by a context can only be accessed by the components 
that are its children within the component tree. This means that any component that needs
access to the context data must be a descendant of the provider component that supplies 
the context value. 


export function App(){
 return (
    <>
      <BioProvider>
        <Home />
        <About />
        <Service />
      </BioProvider>
      
      
    </>
  );
};