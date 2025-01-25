****#39: Best Way to Store Todo Values in State & Adding Button to Check/Uncheck****
----------------------------------------
In this video, we will enhance our React Todo app by adding keys for better performance and a button to check/uncheck tasks. Learn how to manage state updates, handle form submissions, and ensure data integrity in your Todo app. Real-life example: Adding and managing a grocery list efficiently. 💸
=============================================
--when i am using this todo App and adding some task than i am getting new error 
error(worning) here:- in console


TodoList: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props) Error Component Stack
    at TodoList (TodoList.jsx:4:25)
    at ul (<anonymous>)
    at section (<anonymous>)
    at section (<anonymous>)
    at Todo (Todo.jsx:10:27)
    at section (<anonymous>)
    at App (<anonymous>)



    -------thant warning getting beause i am not passing key prapoerly so in this lecture we will see how to Best way to pass Keys in todo app




    notes:-
    In ES2015 (also known as ES6), if the key and value
   are the same in a JavaScript object, you can use shorthand
    property names to write them only once

    example:- {id:id,content:content,checked:checked}
    after:-{id,content,checked}