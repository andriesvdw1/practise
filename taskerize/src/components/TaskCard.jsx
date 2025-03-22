import React from "react";
import '../index.css';
import './TaskCard.css';

function TaskCard({ task, handleDelete }) {
  return (
    <table style={{borderWidth: "thin", border: "black", borderStyle:"solid"}}>
      <tr>
      <th>Task</th>
      <th>Action</th>      
      </tr>
      
      <tr>
        <td width={400}>
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
    </table>
  );
}

export default TaskCard;