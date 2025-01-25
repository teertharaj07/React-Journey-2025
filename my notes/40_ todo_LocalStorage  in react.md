****40: Keep Todo Data After Refresh: Adding Local Storage in React***
--------------------------------------------------
Learn how to add local storage functionality to your React Todo app to persist data across sessions. This tutorial will guide you through storing Todo data, retrieving it as initial values, and handling common issues. Real-life example: Saving a shopping list to access it later, even after closing the browser. 💸
=============================================
  // todoo  add data to local storage
  localStorage.setItem(todoKey, JSON.stringify(task));

// input value store
  const [task, setTask] = useState(() => {
    const rawTodos = localStorage.getItem(todoKey);
    if (!rawTodos) return [];
    return JSON.parse(rawTodos);
  });