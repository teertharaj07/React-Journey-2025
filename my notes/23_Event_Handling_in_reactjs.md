*****23: Event Handling in React: Synthetic Events, Naming Conventions of Events & Functions & More***
-------------------------------------------------
Welcome, we will see How to Handle Events in React JS? Event handling in React.js is the process of capturing and responding to user interactions, such as clicks, keystrokes, or form submissions, within a React application. Event handling in React follows a similar pattern to standard JavaScript event handling but with some key differences, such as using synthetic events for cross-browser compatibility and providing consistent event handling across different elements and browsers. 👉


---------------Event Handling-----------------
Event handling in React.js is the process of capturing and responding to user interactions, such as
clicks, keystrokes, or form submissions, within a React application. Event handling in React follows a
similar pattern to standard JavaScript event handling but with some key differences, such as using
synthetic events for cross-browser compatibility and providing consistent event handling across
different elements and browsers.

------------What is SyntheticBaseEvent in React?------------------

What is SyntheticBaseEvent in React?

When you handle events in React, like clicking a button or typing in an input box, React wraps the
native browser events in something called a SyntheticEvent. This SyntheticEvent is a--
wrapper around the browser's native event, making sure that events behave consist--
browsers.

javascript event --event object but not providing crass boweser capatibitity
react js event ---synthectic event(event object over a wrapper) for crass browser camability

----------------------type of event in react-------------
Here are some widely used React.js events:

1. onClick: Triggered when an element is clicked.

2. onChange: Triggered when the value of an input element changes.

3. onSubmit: Triggered when a form is submitted.

4. onMouseEnter: Triggered when the mouse pointer enters an element.
5.onMouseLeave: Triggered when the mouse pointer leaves an element.
6. onKeyDown: Triggered when a key is pressed down.

7. onKeyUp: Triggered when a key is released.

8. onFocus: Triggered when an element receives focus.

9. onBlur: Triggered when an element loses focus.

10.onlinput: Triggered when the value of an input element is changed (similar to onchanged)

------------Event writing rules----------------------

Event Naming Conventions 

CamelCase: Event names in JSX should be written in camelCase. 
For example, onClick, onChange, onSubmit. 
Prefix with ‘on’: Event handlers should be prefixed with "on". 
For example, onClick, onMouseEnter. 

Function Naming Conventions 

Prefix with ‘handle’: It is a common convention to prefix event handler functions with "handle" to clearly indicate their purpose. For example, handleClick,handleChange, handleSubmit.
Descriptive Names: Function names should be descriptive and reflect what the function does. for example , handleFormSubmit insted of just handleSubmit if it is specifically for form submission.
====================================coding time======

import "./EV.css";


export const EventHandling=()=>{

  function handleButtonClick () {
    alert("Hey  i am onclick event")
  }

    return(
        <>
        
        <button  onClick={handleButtonClick}> click me</button>
        </>
    )
}
!note

   {/* //? Fuction Components with Named Fuctions */
        /* Remeber how we have not called this function,if you call this function here then it will run even clicking. you just need to pass refrence and call here  */
        
        }

        
        <button  onClick={handleButtonClick}> click me</button>