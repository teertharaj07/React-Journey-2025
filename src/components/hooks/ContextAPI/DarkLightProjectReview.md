hello guys this is my DarkLight project review file in this file contain all neccery step witten here to complete the this projet

-----------DARK & LIGHT TOGGLE BUTTON FEATURE-----


project name :- create the website or componets there have a button and few text like that heading ,pragraph .and user clicked this button then user change the mode like light and dark mode and clicked button that some  chages appare on screen like clicked button change the text of button like light mode to dark mode and visevarsa and change thde background color and text color of the content of website like dark mode in white color text and visevarsa

step count:-
Here's a summary of the steps used to implement a Dark/Light mode toggle in React:

### Create a Context:

const ThemeContext = createContext();
This context will store the current theme and the function to toggle it.

## Create a Provider Component:

Define a ThemeProvider component that wraps its children with the ThemeContext.Provider.
Inside ThemeProvider, use the useState hook to manage the theme state, initialized to "light".
Define a toggleTheme function that switches the theme between "light" and "dark".

## Provide Context Values:

Pass the theme state and toggleTheme function as the value of the ThemeContext.Provider.
This allows any child component to access and manipulate the theme.

## Consume the Context in a Component:

In the DarkLight component, use the use hook to consume the ThemeContext.
Destructure the theme and toggleTheme from the context.

## Apply Conditional Styling:

Use conditional class names to apply different styles based on the current theme value.
Adjust the background color, text color, and button label according to the current theme.

## Toggle the Theme:

Attach the toggleTheme function to a button's onClick event.
This allows the user to switch between light and dark modes by clicking the button.



detailed step :-
so gays 

this project contain the concept context and there aplication 

step 1: what is context concept ?
answer :-  in react the context concept used to the share the all data parent to  all child componets whithout using props concept to prevent the problem of props drilling 

step 2: what is props drilling problem in react ?
 answer:- * Props drilling is a pattern in React where you pass data from a parent component to deeply nested child components through multiple layers of components, even if some of the intermediate components don't need the data. 

* As your component tree deepens, prop drilling can make the code more complex and harder to maintain.


so after complete this theory welcome back to the coding part

step 3: how to create the context:
import {createContext} from "react";

export const ThemeContext = createContext();

step  4. how to create the context provider.

// context provider --this is parent componets that holds data there they want to share to our child

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


step 5.  how to create child componets and how acesss the data from the parent componets 


import { use } from "react";
import { createContext, useState } from "react";

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


step 6. App.jsx file content 



import { DarkLight, ThemeProvider } from "./components/hooks/ContextAPI/DarkLight";



const App = () => {
  return (
  <>
<ThemeProvider >
<DarkLight />
</ThemeProvider>
  </>
);
};
export default App;
