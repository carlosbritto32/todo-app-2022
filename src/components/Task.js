import React from "react";
import "../style/Task.css";

const Task = ({ text }) => {
  return (
    <div className="task-container">
      <div className="task-text">{text}</div>
      <div className="task-icon">Clear</div>
    </div>
  );
};

export default Task;
