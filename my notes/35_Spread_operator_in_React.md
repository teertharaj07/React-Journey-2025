*****35: Why we use Three Dots in useState: Discover 4 Real Use Cases of the Spread Operator in React*****
--------------------------------------------------------------------------------------------------------
Dive into the world of React.js with our detailed tutorial on the spread operator and its usage in the useState hook. Learn the syntax and four practical use cases of the spread operator, including copying arrays, concatenating arrays, adding elements to an array, and spreading object properties.
==========spread operator in react=============
The Spread operator in javascript is a syntax introduced in ECMAScript 6(ES6)
-------------------------------------------------
Spread Operator (...)

The spread operator (...) in JavaScript (React) allows an iterable (like an
array or string) to be expanded into individual elements. It provides a
concise way to spread the elements of an iterable object into places
where multiple elements (arguments or elements in array literals) are
expected.

Syntax:

Arrays: const newArray = [...oldArray];

Objects: const newObject = {...oldObject};

=====================================================
Spread Operator (...)
Use Cases

Use Case 1: Copying Arrays

Use Case 2: Concatenating Arrays

Use Case 3: Adding Elements to an Array
Use Case 4: Spreading Object Properties
=================================
--src--projects---todo--help.jsx

  //* Use Case 1: Copying Arrays
  const numbers = [1, 2, 3];
  const copiedNumbers = numbers;
  // const copiedNumbers = [...numbers];
  copiedNumbers[1] = 5;

  console.log("numbers", numbers);// 
  console.log("copiedNumbers", copiedNumbers);


  // In JavaScript, simply assigning an array to a new variable creates a reference, not a copy. This means that if you modify the new array, the original array will also be changed.



  solution------------
    //* Use Case 1: Copying Arrays
  const numbers = [1, 2, 3];

  const copiedNumbers = [...numbers];
  copiedNumbers[1] = 5;

  console.log("numbers", numbers);// 
  console.log("copiedNumbers", copiedNumbers);


  // In JavaScript, simply assigning an array to a new variable creates a reference, not a copy. This means that if you modify the new array, the original array will also be changed.
===========================================================
 //*  Use Case 2: Concatenating Arrays
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combinedArray = [...arr1, ...arr2];
  console.log(arr1,arr2);
  
  console.log(combinedArray);
  ============================================================
    //*   Use Case 3: Adding Elements to an Array
  const arr = [1, 2, 3];
  const newArr = [...arr, 4, 5, 6, 7];
  console.log(arr);//1,2,3
  
  console.log(newArr);//1,2,3,4,5,6,
  =====================================
  
  //*   Use Case 4: Spreading Object Properties
  //?   Write a JavaScript function that takes an object representing a person with name and age properties. The function should use the spread operator (...) to create a new object where the age property of the person is incremented by 1.

  const person = { name: "John", age: 30 };
  const updatedPerson = { ...person, age: person.age + 1 };
  console.log(person);//name: "John", age: 30
  
  console.log(updatedPerson);//name: "John", age: 31
  ===========================================
  all code
  export const Help = () => {
  //* Use Case 1: Copying Arrays
  // const numbers = [1, 2, 3];

  // const copiedNumbers = [...numbers];
  // copiedNumbers[1] = 5;

  // console.log("numbers", numbers);// 
  // console.log("copiedNumbers", copiedNumbers);


  // In JavaScript, simply assigning an array to a new variable creates a reference, not a copy. This means that if you modify the new array, the original array will also be changed.


  //*  Use Case 2: Concatenating Arrays
  // const arr1 = [1, 2, 3];
  // const arr2 = [4, 5, 6];
  // const combinedArray = [...arr1, ...arr2];
  // console.log(arr1,arr2);
  
  // console.log(combinedArray);

  //*   Use Case 3: Adding Elements to an Array
  // const arr = [1, 2, 3];
  // const newArr = [...arr, 4, 5, 6, 7];
  // console.log(arr);//1,2,3
  
  // console.log(newArr);//1,2,3,4,5,6,7

  //*   Use Case 4: Spreading Object Properties
  //?   Write a JavaScript function that takes an object representing a person with name and age properties. The function should use the spread operator (...) to create a new object where the age property of the person is incremented by 1.

  const person = { name: "John", age: 30 };
  // const updatedPerson = { ...person, age: person.age + 1 };
  // console.log(person);//name: "John", age: 30
  
  // console.log(updatedPerson);//name: "John", age: 31

 return <section className="todo-container">
        <h1>Users info</h1>
      <ul>
        // information showing on ui
       Name:-{person.name},Age:-{person.age}
      </ul>
 
 </section>;
};