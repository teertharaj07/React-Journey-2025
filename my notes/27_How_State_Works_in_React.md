## **\***27: How React State Works: In-depth Guide with Theory, Animation, and Practical Examples**\***

# Welcome, we will see How State Works in React js? In React, state is a way to store and manage data that can change over the lifetime of a component. When state changes, React re-renders the component to reflect the new state. This ensures that the user interface stays in sync with the underlying data. 👉

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”,representation of a Ul is kept in memory and synced with the “real” DOM by a
library such as ReactDOM. This process is called reconciliation.

in react 19 does not exits the virtual dom

==============How State Works In React=====
In React, state is a way to store and manage data that can change over the lifetime of a component. When state changes, React re-renders the component to reflect the new state. This ensures that the user interface stays in sync with the underlying data.

\***_Using useState in Function Components _**
\*Initialization: You call useState with the initial state value. It returns an array with two elements:
the current state value and a function to update that state.

- Updating State: When you call the updater function, React schedules a re-render of the component with the new state value.

- Preservation of State: React maintains state between renders. When a component re-render does not reinitialize the state.instead,it user thr preseverd state from the previous render.

============How State works?=========== old
App-->Counter---><div>----< <h1>{counter:0}</h1> ,<button>

here this is tree structure of our current project.when you click on the button then we are trying to update the state.
=====================after clicking======= new
App-->Counter---><div>----< <h1>{counter:1}</h1> ,<button>

     the button calls setState()function, which notifies React.js that er are trying to update a state. React.js then creates a new tree with new state value.

===========================notes===========
React Reconciliation is the
process through which React
updates the Browser DOM.

The Diffing Algorithm:-
DIffifig short for Differences Algorithm is used to diffentiate the DOM tree for efficient updates

====================How State Works ==============
App-->Counter---><div>----< <h1>{counter:1}</h1> ,<button>
Then React js realizes that <h1> is different, then React js will demand ReactDOM to update its value in DOM.

React js will only update this DOM making it effective instead of rendering whole DOM again.
=================== view=========================
App-->Counter---><div>----< <h1>{counter:0}</h1> ,<button>
App-->Counter---><div>----< <h1>{counter:1}</h1> ,<button>
Note: When Reacts creatgs a new tree, it will re-run or re-render the affected component and all its children. So, in this case It will re-run our <Counter /> component, it won't re-render other components outside. Let's demonstrate it.
========== parent and child re-render==============
function App() {
return (

<div>
  <ParentComponent> 
      <ChildComponent /> 
     <AnotherChildComponent /> 
 </ParentComponent> 
 <SiblingComponent /> 
</div>

);
}

Here's how the re-rendering works:

* Initial Render: When the App component first
renders, React renders ParentComponent,
ChildComponent, AnotherChildComponent, and
SiblingComponent.

* State Change in ParentComponent: Suppose
there is a state change in ParentComponent. React
will re-render ParentComponent and all its children
(ChildComponent and AnotherChildComponent).

* Components Outside: SiblingComponent is
affected by the state change in ParentCompent
Therefore, it will not be re-rendered.
=====================================================