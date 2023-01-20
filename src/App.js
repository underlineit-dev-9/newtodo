import { useState } from "react";
import "./App.css";
import Task from "./task";
import useTasks from "./hooks/useTasks";

function App() {
  const [newMainTask, setNewMainTask] = useState("");

  const { tasks, addHandler } = useTasks();

  console.log(`tasks `, tasks);

  return (
    <div>
      <div>
        <center>
          <h3>To Do Management System</h3>
          <input
            type="text"
            placeholder="Enter your tasks"
            data-testid="inputId"
            class="inputClass"
            value={newMainTask}
            onChange={(e) => setNewMainTask(e.target.value)}
          />{" "}
          &nbsp;
          <button
            type="button"
            data-testid="add-button"
            onClick={() => {
              addHandler(newMainTask);
              setNewMainTask("");
            }}
          >
            Add
          </button>
          {tasks.map((task, index) => (
            <Task task={task} index={index} tasks={tasks} />
          ))}
        </center>
      </div>
    </div>
  );
}

export default App;
