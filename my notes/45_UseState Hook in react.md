****45: How to Use the useState Hook in React*****
-----------------------------------------------------
Learn how to effectively use the useState hook in React to manage state in your applications. This video covers the basic syntax, a practical coding example, and demonstrates how to implement a simple increment function. 💸
---------------------------------------------
hooks(folder)---useState(folder)----index.html
================================================
 useState() hook

* The useState hook is a fundamental hook in React that allows you to add state management
to your functional components. It lets you store and update values that change over time,
enabling dynamic and interactive user interfaces.


const [count,setCount]=useState(0)

here breaking syntax:-
const:-varible (key)
count:-State variable, the current state value.
setCount:-Afunction that updates the state variable.
useState(0):- the initial value of the state..
================================================
               useState() hook

* Functions passed fo useState() and setState() runs twice during development mode to prevent developers from running side effects.

* Side effects in programming refer to changes or interactions that occur outside the scope of a function or block of code.


* React.js compares previous state and new state using Object.is(), if it finds both are same then it will ignore re-rendering.

* Reacts batches all setStates() inside a event handlers and run them at the same time.if you try to access the value immediately after setting a state, then you will get old value as it'sasynchronous.

-----------------------------------------
hooks(folder)---useState(folder)----index.html