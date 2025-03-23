import React from "react";
import '../index.css';
import './TaskCard.css';
function TaskCard({ task, handleDelete }) {
  return (
    <table style={{borderWidth: "thin", border: "black", borderStyle:"solid"}}>
      <thead>
        <tr>
          <th>Task</th>
          <th>Action</th>      
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{width: "400px"}}>
            <span className="task-card-details">
              {task.id} - {task.name}
            </span>
          </td>
          <td className="task-card-button-col">
            <button
              className="task-card-button"
              onClick={() => handleDelete(task.id)}
            >Remove task
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TaskCard