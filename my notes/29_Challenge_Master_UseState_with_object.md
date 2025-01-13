*****29: React JS State Challenge: Master useState with Objects - Test Your Skills 🧑‍💻****
------------------------------------------------
Welcome to our React JS State Challenge! In this video, we'll tackle a common React problem by first looping through an object to display user data, then managing the state with the useState hook to achieve the same result. This challenge will help you get comfortable with using different types of values in useState. Test your skills by pausing the video and trying it yourself. 
--------------------------------------------
-----------------challenge.jsx-----------
const users = [
{ name: "Alice", age: 25 },
{ name: "Bob", age: 30 },
{ name: "Charlie", age: 35 },
{ name: "Angles", age: 45 },
1;
export const DerivedState = () = {
return (
<div className="main-div">
<hi>Users List</hi1>
<ul></ul>
</div>
);
]

01:-You have to start by looping through an
object to show names and ages.
ex: name - age yrs old

02:-Then use the useState hook to manage
state and achieve the same result.


----------------------answer.jsx--------------
01:-
import { useState } from "react";

export const DerivedState = () => {
  const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ];



  return (
    <div className="main-div">
      <h1>Users List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
 
    </div>
  );
};
------------------------------------------
//02. by useState() hooks --state variable
export const DerivedState = () => {
    const [users, setUsers] = useState([
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 35 },
      { name: "Angles", age: 45 },
    ]);
  
    
  
    return (
      <div className="main-div">
        <h1>Users List</h1>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} - {user.age} years old
            </li>
          ))}
        </ul>
       
      </div>
    );
  };
  