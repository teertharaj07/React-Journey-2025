// import { useState } from "react";

export const FAQ = ({ curData ,onToggle,isActive}) => {
  const { question, answer } = curData;
//   const [activeId, setActiveId] = useState(false);

// const handleButton=()=>{
//     setActiveId(!activeId)
// }

  return (
    <li>
      <div className="accordion-grid">
        <p>{question}</p>
        <button onClick={onToggle} className={isActive?"active-btn":""}>{isActive ? "close" : "Show"}</button>
      </div>
      <p>{isActive && answer}</p>
    </li>
  );
};