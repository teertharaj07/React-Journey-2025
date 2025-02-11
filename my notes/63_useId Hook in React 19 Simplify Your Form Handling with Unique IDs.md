*****63:useId Hook in React 19: Simplify Your Form Handling with Unique IDs******
Learn how to use the useId hook in React 19 to streamline form handling with unique IDs. This video covers the syntax, practical examples, and best practices for integrating useId in your React projects. Discover how this powerful hook can help you manage multiple elements with a single ID, making your development process smoother and more efficient. 💸

------------
 -----useld()-----


useld is a React Hook for generating unique IDs that can be passed to accessibility attributes. It helps to ensure that each instance of a component gets a unique ID,
which is useful for associating labels with input fields and other elements

syntax= const id = useId()

Parameters: useld does not take any parameters.

Returns: useld returns a unique ID string associated with this particular useld call
in this particular component.

 important Note: useld should not be used to generate keys in a list.


 before using this components
 export const UseId = () => {
  return (
    <form>
      <div>
        <label htmlFor="username"> Username:</label>
        <input type="text" id="username" name="name" />
      </div>
      <div>
        <label htmlFor="email"> Email:</label>
        <input type="email" id="email" name="name" />
      </div>
      <button type="submit"> Submit</button>
    </form>
  );
};


after using useId() hook 


import { useId } from "react";
import "../useRefs/index.css"
export const UseId = () => {
const usernameId=useId();
const emailId=useId();
  return (
    <form>
      <div>
        <label htmlFor={usernameId}> Username:</label>
        <input type="text" id={usernameId} name="name" />
      </div>
      <div>
        <label htmlFor={emailId}> Email:</label>
        <input type="email" id={emailId} name="name" />
      </div>
      <button type="submit"> Submit</button>
    </form>
  );
};




--------
import { useId } from "react";
import "../useRefs/index.css"
export const UseId = () => {
const usernameId=useId();
const passwardId =useId();
const emailId=useId();
  return (
    <form>
      <div>
        <label htmlFor={usernameId}> Username:</label>
        <input type="text" id={usernameId} name="name" />
      </div>

      <div>
        <label htmlFor={passwardId}> Passward:</label>
        <input type="passward" id={passwardId} name="passward" />
      </div>
      <div>
        <label htmlFor={emailId}> Email:</label>
        <input type="email" id={emailId} name="email" />
      </div>
      <button type="submit"> Submit</button>
    </form>
  );
};



-------

 deel with mutiple unique id

 import { useId } from "react";
import "../useRefs/index.css"
export const UseId = () => {


// this lets you avoid calling for every single element that needs a unique Id
const id=useId();

return (
    <form>
      <div>
        <label htmlFor={ id+ "usernameId"}> Username:</label>
        <input type="text" id={id+ "usernameId"} name="name" />
      </div>

      <div>
        <label htmlFor={id+"passwardId"}> Passward:</label>
        <input type="passward" id={id+"passwardId"} name="passward" />
      </div>
      <div>
        <label htmlFor={id+"emailId"}> Email:</label>
        <input type="email" id={id+"emailId"} name="email" />
      </div>
      <button type="submit"> Submit</button>
    </form>
  );
};
