Cc ingR j
reating React.js
Project
Introduction to React.js
History of React.js 4
Why React.js over Vanilla JavaScript g
Setting up development environment
Creating React.js project
------------------------------------------
download node.js
visual studio Code
@ Prettier
   . Turn on Format on Save
@ ESLint
----------------------------------------
*** Ways of Creating React.js Project ****
+ Custom
* You can choose transpiler and bundler yourself and choose your own configuration.
« This was how React js web apps were created in past, but it's not needed now.

+ create-react-app
+ As setting up bundler and transpiler yourself was a tedious task, Facebook created create-react-app as a tool to
create Reacts projects.
+ But now it's abandoned and no longer recommended. If you have seen this somewhere then avoid using it

* Vite
« This is a modern and recommended way of creating React js. This is what we will use in this cour;
* This is much faster and creates smaller bundle sizes.

* Meta Frameworks (Next.js, Remix, Gatsby, etc.)
« Reacts is slowly moving towards being server focused instead of client focused
* That's why you will find these frameworks being suggested if you visit official React js Daf
but for learning purposes, starting from meta frameworks can be confusing.
+ To understand the need of Meta Frameworks, you first need to understand how plain Re
created.
« But you must lear these frameworks after grasping concepts of Reacts. \

---------------------------------
package manager ,npm, bun pnpm 

====01.with help of bun 
----- install the bun ,-- npm i bun
---crate project with bun =- bun create vite
---project name ==== react-project
chose the framework ==== React
chose the language ==== javascript 
done . Now run:
cd react-project
npm install
npm run dev

local: http://localhost:5174

-------------------------------------------- 
======main.jsx==============
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
  </StrictMode>,
)
------------------------------------------
=========App.jsx=================
const App = () => {
  return (
    <div>App</div>
  )
}

export default App
-----------------------------------

second Ways
------------------------------
=======main.jsx=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
-----------------------------
================App.jsx=-=================
export const App=()=>{
  return <h1>Teertharaj Turkar, Front-end web devlope</h1>
}
--------------------------------------------------------------
============================== pacakage.json============ react 18===============================
 "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },

============================== pacakage.json============ react 19===============================
 "dependencies": {
    "react": "^19.0.0-rc.1",
    "react-dom": "^19.0.0-rc.1"
  },
  ==========================================================================================
  to achive this versition go to the pacakage.json and clear the data  of dependencies like react and react-dom
 "dependencies": {
 
  },

  go to terminal and and type this command

  react for---------npm install react@rc

  react-dom ---------npm install react-dom@rc

  ---------------------------------------------------------

  how to start sever and close the the sever
    before start the sever to check the your are in the current project foloder else no so 
        type this commond ------cd project foloder

     for close the sever press CTRT+C two time
-----------------------------------------------------------------------------------------   
   
