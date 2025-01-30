****#44: React Hook Rules! Every Dev Must Know to Master React JS******
---------------------------------------------------
In this video, we'll explore the essential rules for using hooks in React JS, explaining why they are important and how they can help you write better code. We'll go through each rule with practical examples to show their applications and significance. By understanding and following these rules, you'll be able to avoid common pitfalls and enhance the performance of your React applications. For instance, learn why hooks should only be called at the top level of your component functions and see how breaking this rule can lead to issues. 💸
============================================
-----Hooks Rule in react-----------

* Hooks let you use different React features from your components. 

* It starts with use__ __. (useState, useEffects, useReducer) 

* Hooks can only be used at the top level of your component.

* Do not call Hooks inside loops, conditions, or nested functions.



* Call Hooks only from React function components or custom Hook. Do not call Hooks from regular Javascript functions or in Class components. 

* You can also create your own custom hooks by creating functions starting with use__ this
ensures that React can identify it as a Hook. (ex. useFetch, useForm)


* Ensure Hooks are Called in the Same Order. This allows React to properly preserve If =
between re-renders. 
-----------------------------------------------------------------
* Hooks let you use different React features from your components. 

* It starts with use__ __. (useState, useEffects, useReducer)
-----
type of React Hooks

01.useState()
02.useEffect()
03.useContext()
04.useReducer()
05.useCallback()
06.useMemo()
07.useRef()
08.useLayoutEffect()
09.useImprrativeHandle()
----------------------------------------------------------------



============================================================
------------------
* Hooks can only be used at the top level of your component.

* Do not call Hooks inside loops, conditions, or nested functions.
-------------------------------


// this is write way
  const [count,setCount]=useState()
  // * Hooks can only be used at the top level of your component.
  // * Do not call Hooks inside loops, conditions, or nested functions.
  // we can not define hooks there way
// if(user){
//   const [count,setCount]=useState()
// }


// this is write way
if(user){
  setCount(count+1)
}
=============================================================
---------source.md----------
## Rule 1 - Only Call Hooks at the Top Level & Never insides Conditions or Loops

Incorrect:

```js
function MyComponent() {
  const [count, setCount] = useState(0);

  if (count > 0) {
    const [text, setText] = useState(""); // This is incorrect
  }

  // More component logic...
}
```

Correct

```js
function MyComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(""); // Always call Hooks at the top level

  if (count > 0) {
    // Conditional logic here...
  }

  // More component logic...
}
```
=============================================