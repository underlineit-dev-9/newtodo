import { useState } from "react";
import "./App.css";
import Task from "./task";
import useTasks from "./hooks/useTasks";

function App() {
  const [newMainTask, setNewMainTask] = useState("");
  const { tasks, addHandler, submitHandler, deleteHandler } = useTasks();
  return (
    <div>
      <div>
        <center>
          <h3>To Do Management System</h3>
          <input
            type="text"
            placeholder="Enter your tasks"
            data-testid="inputId"
            className="inputClass"
            value={newMainTask}
            onChange={(e) => setNewMainTask(e.target.value)}
          />{" "}
          &nbsp;
          <button
            type="button"
            data-testid="add-button"
            onClick={() => {
              if(newMainTask===''){
                alert("you are not allowed to enter empty box")
              }else{
              addHandler(newMainTask);
              setNewMainTask("");
              }
            }}
          >
            Add
          </button>
          {tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              index={index}
              tasks={tasks}
              submitHandler={submitHandler}
              deleteHandler={deleteHandler}
            />
          ))}
        </center>
      </div>
    </div>
  );
}

export default App;
