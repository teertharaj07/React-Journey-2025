               Toggle Switch Component

**Features:-

* Aswitch that toggles between on and of states. 
* Change the appearance based on the current state (e.g,, different colors for on and off).
* Display the current state (e.g., "On" or "Off) .


**Use Cases :-
1. Feature Toggle: Use the toggle switch to enable or disable features in your application.

2. Dark Mode: Implement a dark mode toggle switch to switch between light and dark themes. 

3. Settings: Use toggle switches in a settings menu to turn various settings on or off.

4. Visibility Control: Toggle the visibility of certain Ul elements or sections.

5. Form Inputs: Use toggle switches as part of form inputs to capture user preferences.



import { useState } from "react";
import "./ToggleSwitch.css";
// import { IoIosSwitch } from "react-icons/io";
// import { PiUserSwitchFill } from "react-icons/pi";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const checkIsOn = isOn ? "on" : "off";
  const toggleBGColor = { backgroundColor: isOn ? "#4caf50" : "" };

  return (
    <>
      <h1 style={{ color: "#000", textAlign: "center" }}>
        Toggle Switch{" "}
        {/* <IoIosSwitch style={{ color: "red", textAlign: "center" }} />
        <PiUserSwitchFill /> */}
      </h1>
      <div
        className="toggle-switch"
        style={toggleBGColor}
        onClick={handleToggleSwitch}
      >
        <div className={`switch ${checkIsOn}`}>
          <span className="switch-state">{checkIsOn}</span>
        </div>
      </div>
    </>
  );
};



// export const ToggleSwitch = () => {

//   return (
//     <>
//       <div className="toggle-switch">
//         <div className=" switch ">
//           <span className="switch-state"></span>
//         </div>
//       </div>
//     </>
//   );
// };
