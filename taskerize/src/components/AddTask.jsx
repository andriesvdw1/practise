import { useState } from "react";
function AddTask() {
    const [taskValue, setTaskValue] = useState("");
    const handleChange = (event) => {
        setTaskValue(event.target.value);
    }
  return (
    <section className="add-task">
        <form>
            <h1>Add a new task:</h1>
            <label htmlFor="task">Task Name:</label>
            <input onClick={handleChange} type="text" name="task" id="task" placeholder="Task Name" autoComplete="off" />
            <input style={{backgroundColor:"yellow"}} type="submit" value="Add task" />
            <p>{taskValue}</p>
        </form>
    </section>
  )
}

export default AddTask