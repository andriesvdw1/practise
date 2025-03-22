import React from "react";
import '../index.css';

function TaskCard({task, handleDelete}) {
  return (
    <li className={task.completed ? "done" : "pending"}>
      <span>
        {task.id} - {task.name}
      </span>
      <button onClick={() => handleDelete(task.id)}>Remove task</button>
    </li>
  );
}

export default TaskCard;
