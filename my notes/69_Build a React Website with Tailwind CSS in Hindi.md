***69:Build a React Website with Tailwind CSS in Hindi 68 video****

In this video, we dive deep into creating a professional React website with Tailwind CSS, including a functional dark mode toggle using the Context API. You'll learn how to set up your project, structure your folders, and implement conditional styling with Tailwind CSS. This tutorial also highlights common mistakes to avoid, ensuring you build an optimized and visually appealing website. Real-life examples and hands-on coding make this a must-watch for anyone looking to enhance their React skills. 💸


import { createContext, useState } from "react";
// Context creation
 export const ThemeContext= createContext(); 

// context provider

 export const ThemeProvider =({children})=>{
  
   const [theme,setTheme] = useState("dark");



    return <ThemeContext.Provider value={{theme:theme}}>
      {children}
    </ThemeContext.Provider>
}







--------------
import { use } from "react";
import { createContext, useState } from "react";
// Context creation
export const ThemeContext = createContext();

// context provider

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    return setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//creating a componets--child

export const DarkLight = () => {

    // geeting the context provider data for children use

         const {theme,handleToggleTheme}=use(ThemeContext);

  return (
    <div>
      <h1> Dark Light Mode Website</h1>
      <p> Hello !! My React v19 Fans👍</p>
      <button onClick={handleToggleTheme}>switch to {theme} mode</button>
    </div>
  );
};



---------------
all code here 
import { use } from "react";
import { createContext, useState } from "react";
// Context creation
export const ThemeContext = createContext();

// context provider

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    return setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//creating a componets--child

export const DarkLight = () => {
  // geeting the context provider data for children use

  const { theme, handleToggleTheme } = use(ThemeContext);

  return (
    <div
      className={`p-4 h-lvh flex flex-col justify-center items-center ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h1
        className={`my-4 text-xl ${
          theme === "light" ? "text-gray-800" : "text-white"
        }`}
      >
        {" "}
        Dark Light Mode Website
      </h1>
      <p
        className={`my-4 text-xl ${
          theme === "light" ? "text-gray-800 font-sembold" : "text-white"
        }`}
      >
        Hello !! My React v19 Fans👍
      </p>
      <button
        onClick={handleToggleTheme}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4 text-xl"
      >
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};
---

app.jsx
import { DarkLight, ThemeProvider } from "./components/hooks/ContextAPI/DarkLight";
const App = () => {
    return (
  <>
<ThemeProvider >
<DarkLight />
</ThemeProvider>
  
  
  </>
); 
}