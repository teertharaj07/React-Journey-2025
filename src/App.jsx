// import { UseRef } from "./components/hooks/useRefs";

import { DarkLight, ThemeProvider } from "./components/hooks/ContextAPI/DarkLight";

// import { ForwordRefs } from "./components/hooks/useRefs/ForwordRef";

// import { UseId } from "./components/hooks/UseID";

// import { ParentComponet } from "./components/PropDrilling";


// import { BioProvider } from "./components/hooks/ContextAPI";
// import { About } from "./components/hooks/ContextAPI/About.jsx";
// import { Home } from "./components/hooks/ContextAPI/Home.jsx";
// import { Service } from "./components/hooks/ContextAPI/Service.jsx";

const App = () => {
  // return <UseRef />
  // return <ForwordRefs />
  // return <UseId />
  // return <ParentComponet />


  // return (
  //   <>
  //     <BioProvider>
  //       <Home />
  //       <About />
  //       <Service />
  //     </BioProvider>
     
      
      
  //   </>
  // );



return (
  <>
<ThemeProvider >
<DarkLight />
</ThemeProvider>
  
  
  </>
);




};

export default App;
