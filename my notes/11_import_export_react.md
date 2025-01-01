****11: React Import and Export Explained | React Tutorial in Hindi 2024 ****
--------------------------------------------
--------Import Export in Reactjs-----------
* 1: Default Export and Import |
* 2: Named Export and Import |
& 3: Mixed Export and Import |


* 1: Default Export and Import:-
step1:- create a folder as name of components in src folder and in the under this folder create new file as components name of NetflixSeries.jsx and pass this code
-----------NetflixSeries.jsx, Components,src-----
//* Netflix components
const NetflixSeries = () => {
    // write here javascript code:-
    let name="Queen of Tears";
    let rating=8.2;
    let summary="Baek Hyun-woo and Hong Hae-in navigate a tense relationship,both at home and at work. But upon deciding his future, Hyun-woo pays a visit to his family."
    const returnGenver=()=>{
      return "romantic";
    }
    let userAge=18;
    const canWatch=()=>{
      if(userAge>=18){
        return "Available for Adult"
      }
      else{
        return " not Available for child"
    
      }
    }
    // let userAge=17;
    
    // let userAge=19;
    
      return (
        <div>
          <div>
            <img width="50%" height="50%" src="qot.jpg" alt="qot.jpg" />
            <h2>Name:{name}</h2>
            <h3>Rating:{rating}</h3>
            <p>
              summary:{summary}
            </p>
            <p>view:-{234+67}K</p>
            <p>Genre:{returnGenver()}</p>
            <button>{canWatch()}</button>
          </div>
        </div>
      );
     
    }
    

    export default NetflixSeries;
    ------------------------------------
    step 2:- in App.jsx export this components following this code
    ----------App.jsx-----------
    
import NetflixSeries from "./components/NetflixSeries";
 const App = () => {
  return (
         <>
     <NetflixSeries />
     <NetflixSeries />
          </>
    );
};

export default App;
-------------main.jsx----------------
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'
import App from './App.jsx'
// import { Practices } from './Practices.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Practices /> */}
    
  </StrictMode>,
)
---------------- export default NetflixSeries;------------------------------
sumary:-file 1: components making:-
make component and write this line for default export;-
const ComponentName=()=>{};
export default ComponentName;
export default NetflixSeries;
summary;-file2: componets importing;-
for importing any component write this line:-
import ComponetsName from "address of components";
import NetflixSeries from "./components/NetflixSeries";
----------------  Named Export and Import |------------------------------
sumary:-file 1: components making:-
make component and write this line for default export;-
export Component define;
export const NetflixSeries=()=>{};
summary;-file2: componets importing;-
for importing any component write this line:-
import {ComponetsName} from "address of components";
import {NetflixSeries} from "./components/NetflixSeries";

----------------  3: Mixed Export and Import |------------------------------
sumary:-file 1: components making:-
make component and write this line for default export;-
export Component1 define;
export Component2 define;
export const NetflixSeries=()=>{};
export const Footer=()=>{};
summary;-file2: componets importing;-
for importing any component write this line:-
import {ComponetsName1,componetsName2} from "address of components";
import {NetflixSeries,Footer} from "./components/NetflixSeries";
--------------------------------


----------------  4: combined Export and Import |------------------------------

sumary:-file 1: components making:-
make component and write this line for default export;-
export Component1 define;
export Component2 define;
const ComponentName=()=>{};
export default ComponentName;
export default NetflixSeries;
export const NetflixSeries=()=>{};
export const Footer=()=>{};
summary;-file2: componets importing;-
for importing any component write this line:-
import componentName1, {ComponetsName2,componetsName3} from "address of components";
import NetflixSeries, {Footer,Header} from "./components/NetflixSeries";
--------------------------------