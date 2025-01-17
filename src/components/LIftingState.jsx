import { useState } from "react";

// before applying lifting up concept


// export const LiftingState = () => {
//   return (
//     <>
//       <InputComponents />
//       <DisplayComponents />
//     </>
//   );
// };

// const InputComponents = () => {
//   const [InputValue, SetInputValue] = useState("");

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="enter your name"
//         value={InputValue}
//         onChange={(e) => SetInputValue(e.target.value)}
//       />
//     </>
//   );
// };

// const DisplayComponents = () => {
//   return (
//     <>
//       <p>The Current input Value is:</p>
//     </>
//   );
// };


// after applying lifting up concept

export const LiftingState = () => {

    const [InputValue, SetInputValue] = useState("");
    return (
      <>
        <InputComponents InputValue={InputValue} SetInputValue={SetInputValue}/>
        <DisplayComponents  InputValue={InputValue} />
      </>
    );
  };
  
  const InputComponents = ({InputValue,SetInputValue}) => {
    
  
    return (
      <>
        <input
          type="text"
          placeholder="enter your name"
          value={InputValue}
          onChange={(e) => SetInputValue(e.target.value)}
        />
      </>
    );
  };
  
  const DisplayComponents = ({InputValue}) => {
    return (
      <>
        <p>The Current input Value is:{InputValue}</p>
      </>
    );
  };



