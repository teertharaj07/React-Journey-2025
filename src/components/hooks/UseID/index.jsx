import { useId } from "react";
import "../useRefs/index.css"
export const UseId = () => {
// const usernameId=useId();
// const passwardId =useId();
// const emailId=useId();
// //   return (
//     <form>
//       <div>
//         <label htmlFor={usernameId}> Username:</label>
//         <input type="text" id={usernameId} name="name" />
//       </div>

//       <div>
//         <label htmlFor={passwardId}> Passward:</label>
//         <input type="passward" id={passwardId} name="passward" />
//       </div>
//       <div>
//         <label htmlFor={emailId}> Email:</label>
//         <input type="email" id={emailId} name="email" />
//       </div>
//       <button type="submit"> Submit</button>
//     </form>
//   );





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
