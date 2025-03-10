*****98:React Project🔥Dynamic Accordion in React 19 p1*****
In this video, we’ll walk through creating a dynamic accordion in React 19 that allows only one tab to stay open at a time, automatically closing the others. This is a step up from basic accordions, offering a more user-friendly experience. By the end, you'll understand how to use React components and state management to build a clean, efficient accordion. Perfect for modern web development projects like FAQs or content toggle sections. 💸





-----------
How to Build a Accordion Using React v19
Accordions are a great way to organize content in a compact and user-friendly manner. They allow users to click on a heading (like a question) to reveal or hide the content beneath it (like the answer). In this post, I’ll guide you through the steps to create a simple accordion using React JS v19.

Steps to Build the Accordion

Create the Parent Accordion Component:

Import necessary hooks: Use useState and useEffect from React to manage state and effects.
Fetch FAQ data: Import your faq.json file or use sample data for the FAQ.
State for tracking the active FAQ: Create a state variable activeId using useState(null). This will store the ID of the currently active (opened) FAQ.
Function to toggle FAQ: Create a function handleToggle(id) that will:
If the clicked FAQ is already open, close it by setting activeId to null.
If another FAQ is clicked, open it by setting activeId to that FAQ’s ID.
Pass Data to the FAQ Component:

In the parent Accordion component, loop through the FAQ data using map().
For each FAQ, pass down:
The data (curData) for the current FAQ.
The current activeId to determine if the FAQ should be open or closed.
A function onToggle to handle when the FAQ is clicked.
Build the Child FAQ Component:

Props: Accept the curData, isActive, and onToggle as props.
Display FAQ Question: Show the question for the FAQ.
Toggle Button: Create a button that calls onToggle when clicked, toggling between "Show" and "Close".
Conditionally Show Answer: Use the isActive prop to determine if the answer should be visible. If isActive is true, display the answer; otherwise, keep it hidden.
Final Integration:

When a user clicks on an FAQ question, it toggles between open and closed.
Only one FAQ can be open at a time. If another FAQ is clicked, the previous one will close automatically.
Visual Overview of the Logic:
Parent Accordion Component:

Holds all FAQ data.
Manages the state of which FAQ is active.
Passes down data and functions to control the behavior of each FAQ.
Child FAQ Component:

Receives individual FAQ data.
Knows if it's active based on the state from the parent.
Toggles its own state to show or hide the answer.
Bonus:
The code is structured to be reusable. You can easily add more FAQs by just updating the data, and the component will handle it automatically.
Access the Complete Source Code
If you're ready to dive in, you can access the entire source code for this tutorial on my GitHub. Just click the link below to get started:

---

import { useEffect, useState } from "react";
import faq  from "../API/faq.json";

export const Accordion = () => {
  const [data, setData] = useState([]);
  const[button,setButton]=useState("Show");

  useEffect(() => {
    setData(faq);
  }, []);





console.log(data);

// show and hide button functionality
const handleShowButton=()=>{
  setButton("Hide")
  
}


  return (
    <>
      <h1>The Accordion</h1>
      <ul className="section-accordion">
        {data.map((curElem) => {
          return (
            <li key={curElem.id}>
              <div className="accordion-grid">
                <p>{curElem.question}</p>
                <button onClick={()=>handleShowButton()}>{button}</button>
                
              </div>
              <p style={{display:button==="Show"?"none":"block"}}>{curElem.answer}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};




FAQ.jsx--
import { useState } from "react";

export const FAQ = ({ curData }) => {
  const { question, answer } = curData;
  const [activeId, setActiveId] = useState(false);

const handleButton=()=>{
    setActiveId(!activeId)
}

  return (
    <li>
      <div className="accordion-grid">
        <p>{question}</p>
        <button onClick={handleButton}>{activeId ? "close" : "Show"}</button>
      </div>
      <p>{activeId && answer}</p>
    </li>
  );
};

import { useEffect, useState } from "react";
import faq  from "../API/faq.json";
import { FAQ } from "./UI/FAQ";

export const Accordion = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    setData(faq);
  }, []);





console.log(data);




  return (
    <>
      <h1>The Accordion</h1>
      <ul className="section-accordion">
        {data.map((curElem) => {
          return (
            <FAQ  key={curElem.id} curData={curElem} />
          );
        })}
      </ul>
    </>
  );
};



-------------------