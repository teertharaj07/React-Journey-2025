import "./EV.css";

export const EventHandling = () => {
  //   function handleButtonClick () {
  //     alert("Hey  i am onclick event")
  //   }

  const handleButtonClick = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.type);

    alert("Hey  i am onclick event");
  };

  const handleWelcomeUser = (User) => {
    console.log(`Hey ${User},Welcome`);
  };

  return (
    <>
      {/* //? Fuction Components with Named Fuctions */
      /* Remeber how we have not called this function,if you call this function here then it will run even clicking. you just need to pass refrence and call here .it geetting event object from react application
       */}

      {/* synthectic event */}
      <button onClick={handleButtonClick}> click me</button>
      {/* <button  onClick={handleButtonClick()}> click me</button> */}
      <br />
      {/* it does not get event object from react application  */}
      <button onClick={() => handleButtonClick()}> click me 2</button>
      <br />

      {/* it  gets event object from react application passing minumal event */}

      {/* pointer event */}
      {/* In React , event handlers receive the event object as an argument by default . howerever, when you use an arrow function directly in the onclick attribute whithout passing the event explicity,React does not pass the event object to your handler funvtion.this is because the arrow function creates a new functions and calls your handler without passing any arguments. */}

      <button onClick={() => handleButtonClick(event)}> click me 2</button>
      <br />
      <button onClick={(event) => console.log(event)}> Inline function</button>
      <br />
      {/* //? Function Componrnts with Arrow Functions  */}
      <button onClick={() => alert(" hey  i am Inline event function")}>
        {" "}
        Inline Arr fun
      </button>
<br />
      {/* //?Passing Aguments to Event Handles */}
      <button onClick={()=>handleWelcomeUser(" vinod")}> handled click me</button>
      <button onClick={()=>handleWelcomeUser(" teerth")}> handled click me</button>
    </>
  );
};
