****24: Passing Events as Props in React | Control Parent Function Using Child Component🔥*****
------------------------------------------
Welcome, Passing events as props in React allows parent components to send functions as props to child components. This enables child components to execute these functions, triggering actions defined in the parent. It's a powerful way to manage event handling and ensure a clear, maintainable structure in your React application. By understanding this concept, you can create more dynamic and interactive user interfaces. 
======================ppt 1==============
       Passing event handlers as props
Passing event handlers as props in React.js is common pattern used to allow child components to communicate with parent components. This pattern is useful in various scenarios, including:

**Form Handling: Passing event handlers like onChange or onSubmit to form components
allows the child components to update the form data and notify the parent component of changes.

**User Interaction: Event handlers like onClick can be passed to interactive elements (e.g.,
buttons, links) to trigger specific actions in the parent component, such as opening a modal
or navigating to a different page.

**State Management: Event handlers can be used to update state in the parent component,
which can then be passed down to child components as props to reflect the updated start.

**Callback Functions: Event handlers can be used as callback functions to handle asynchronous operations or to update state based on the result of an operation.

==================ppt 2=====================
import "./EV.css";


export const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`Hey , ${user}`);
  };

  const handleHover = () => {
    alert(`Hey Thanks for hovering me `);
  };

  return (
    <>
      <WelcomeUser
        onClick={() => HandleWelcomeUser("teerth")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const handleGreeting = () => {
    console.log(`Hey User, Welcome`);
    props.onClick();
  };
  return (
    <>
      <button onClick={props.onClick}> click me</button>
      <button onMouseEnter={props.onMouseEnter}>Hover me</button>

      <button onClick={handleGreeting}> Greeting</button>
    </>
  );
};



-------------------------------------------------
import "./EV.css";

export const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`Hey , ${user}`);
  };

  const handleHover = () => {
    alert(`Hey Thanks for hovering me `);
  };

  return (
    <>
      <WelcomeUser
        onButtonClick={() => HandleWelcomeUser("teerth")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const { onButtonClick, onMouseEnter } = props;

  const handleGreeting = () => {
    console.log(`Hey User, Welcome`);
    props.onClick();
  };
  return (
    <>
      {/* <button onClick={props.onButtonClick}> click me</button>
      <button onMouseEnter={props.onMouseEnter}>Hover me</button>

      <button onClick={handleGreeting}> Greeting</button> */}

      <button onClick={onClick}> click me</button>
      <button onMouseEnter={onMouseEnter}>Hover me</button>

      <button onClick={handleGreeting}> Greeting</button>
    </>
  );
};