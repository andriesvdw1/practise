import { useState } from "react";

function AddTask() {
  const [taskValue, setTaskValue] = useState("");
  const handleChange = (event) => {
    setTaskValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    let task = {
      id: Math.floor(Math.random() * 10000),
      name: event.target.task.value, 
      completed: false,
    };
    console.log(task);
  };

  return (
    <section className="add-task">
      <form onSubmit={handleSubmit}> // Pass the handleSubmit function to the form
        <h1>Add a new task:</h1>
        <label htmlFor="task">Task Name:</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Task Name"
          autoComplete="off"
          value={taskValue} 
          onChange={handleChange}
        />
        <input style={{ backgroundColor: "yellow" }} type="submit" value="Add task" />
        <p>{taskValue}</p>
      </form>
    </section>
  );
}

export default AddTask;