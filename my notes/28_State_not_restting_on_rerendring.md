****28: Why the state value does not reset to its initial value on re-render? Know the Real Reason🔥*****
------------------------------------------
Discover why the state value in React doesn't reset to its initial value upon re-rendering. Understand the underlying reasons and how it affects your React applications. 👉
=======================================
    ** Why the state value does not reset tobits initial value on re-render? **

First Render: const [count, setCount] = useState(0);

count is initialized to 0

Button Click: increment function is called.

setCount{count + 1) updates count to 1

Re-render: React re-renders the component. (when user click button for the 2nd time)

const [count, setCount] = useState(0); sees that count is now 1 and uses 1 as the current state. 
The useState hook is smart enough to only use  the initial valve the very first time the component renders.