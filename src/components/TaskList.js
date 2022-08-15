import React from "react";
import "../style/TaskList.css";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const actualizedTask = [task, ...tasks];
      setTasks(actualizedTask);
    }
  };

  const deleteTask = (id) => {
    const actualizedTask = tasks.filter((task) => task.id !== id);
    setTasks(actualizedTask);
  };

  const completeTask = (id) => {
    const actualizedTask = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(actualizedTask);
  };

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className="task-list-container">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))}
      </div>
    </>
  );
};

export default TaskList;
