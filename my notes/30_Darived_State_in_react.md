****30: Derived State in React.js: Improving State Management and Remove Redundancy & Dependency****
------------------------------------------------
In this video, we dive into derived state in React.js, explaining what it is, why it's important, and how to use it effectively in your projects. We'll walk through a practical example and discuss the advantages of using derived state compared to normal state. For instance, imagine you have a component that needs to calculate and display the total price based on a list of items. Derived state helps you manage this efficiently without redundant recalculations.


=======what is Derived State in React?=======
Derived state is any state that can be computed based on other state or props. It is not stored directly in the component's state but is calculated when needed. Te approach helps avoid duplication and keeps the state simpler and more manageable.

Ex: const userCount = users.length;

***Benefits of Derived State--

*Avoid Redundancy: By deriving values from existing state, you avoid storing redundant data.

* Consistency: Ensures that derived values are always in sync with the underlying, state props.

* Simplicity: Reduces the complexity of state management by minimizing the number of state variables.