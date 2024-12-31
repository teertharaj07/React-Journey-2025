*** 10: Our First React Interview Question & Answer | React Tutorial in Hindi***

step 01. make new jsx file of components
like this 
in src folder Practices.jsx

and write intial code:-
export const Practices=()=>{
return <h1>interview</h1>
} 

step 2:-in main.jsx import the components and render the components like this:-

import { Practices } from './Practices.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Practices />
    
  </StrictMode>,
)
