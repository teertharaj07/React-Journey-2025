## \***\*25: Event Propagation in React: Capturing, Bubbling, and Practical Implementation🔥\*\***

Welcome to the Event Propagation in React. Event propagation in React involves the capturing and bubbling phases, where events flow from the root to the target element and then back up. Understanding these phases is crucial for effective event handling. Learn how to manage event propagation, stop events from bubbling, and implement the capturing phase in your React applications. This knowledge helps create more efficient and controlled event-driven components.
=======================ppt 1=====================
---Event Propagation-------------
Event propagation refers to the process of how events
propagate or travel through the DOM (Document Object
Model) hierarchy.
In JavaScript, there are two phases of event propagation:
capturing phase and bubbling phase

**Capturing Phase:  top to bootom 
The event starts from the root of the DOM and goes down to the target element.

**Target Phase:
The event reaches the target element.

**Bubbling Phase: bootom to top
The event starts from the target element and
bubbles up to the root of the DOM.



=======in react====ppt 2================
--------Event Propagation--------------
** In React.js, event propagation refers to the process by which events propagate or
"bubble" up from the target element through its parent elements in the DOM hierarchy.
React follows the same event propagation model as regular JavaScript DOM events.

** When an event occurs on an element in a React component, such as a button click, the
event is first captured at the target element and then bubbles up through the parent
elements, triggering any event handlers that have been defined along the way. This
allows you to handle events at different levels of the component hierarchy.

** React provides a way to stop event propagation using the stopPropagation--
which can be called on the event object within an event handler. This means
the event from bubbling up further in the DOM, ensuring that only the
the target element is triggered.



=================event Propagation===========
import "./EV.css";

export const EventPropagation = () => {
  const handleGrandParent = (event) => {
    

    console.log("GrandParent Clicked");
  };

  const handleParentClick = (event) => {
   

    console.log("Parent Clicked");
  };

  const handleChildClick = (event) => {
    console.log(event);
    //to stop the event progation

    console.log("Child Clicked");
  };

  return (
    <>
      <section className="main-div">
        <div className="g-div" onClick={handleGrandParent}>
          <div className="p-div" onClick={handleParentClick}>
            <button className="c-div" onClick={handleChildClick}>
              Child div
            </button>
          </div>
        </div>
      </section>
    </>
  );
};


===========stop event progation===============
import "./EV.css";

export const EventPropagation = () => {
  const handleGrandParent = (event) => {
    event.stopPropagation();

    console.log("GrandParent Clicked");
  };

  const handleParentClick = (event) => {
    event.stopPropagation();

    console.log("Parent Clicked");
  };

  const handleChildClick = (event) => {
    console.log(event);
    //to stop the event progation
    event.stopPropagation();
    console.log("Child Clicked");
  };

  return (
    <>
      <section className="main-div">
        <div className="g-div" onClick={handleGrandParent}>
          <div className="p-div" onClick={handleParentClick}>
            <button className="c-div" onClick={handleChildClick}>
              Child div
            </button>
          </div>
        </div>
      </section>
    </>
  );
};




===============event capuring phase=====
import "./EV.css";

export const EventPropagation = () => {
  const handleGrandParent = (event) => {
    // event.stopPropagation();

    console.log("GrandParent Clicked");
  };

  const handleParentClick = (event) => {
    // event.stopPropagation();

    console.log("Parent Clicked");
  };

  const handleChildClick = (event) => {
    console.log(event);
    //to stop the event progation
    event.stopPropagation();
    console.log("Child Clicked");
  };

  return (
    <>
      <section className="main-div">
        <div className="g-div" onClickCapture={handleGrandParent}>
          <div className="p-div" onClickCapture={handleParentClick}>
            <button className="c-div" onClickCapture={handleChildClick}>
              Child div
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
