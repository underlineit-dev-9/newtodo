// import { useState,useRef } from "react";
import { useState } from "react";
import "./App.css";
import Task from "./task";
import _ from "lodash";

// var _ = require('lodash');

function App() {
  const [newMainTask, setNewMainTask] = useState("");
  const [tasks, setTasks] = useState(["task 1", "task 2", "task 3", "task 4"]);

  function deleteHandler(index) {
    const tempArray = _.remove(tasks, (element) => {
      return tasks.indexOf(element) !== index;
    });
    // console.log(`task ${tasks} index ${index}`)

    // for (let i = 0; i < tasks.length; i++) {
    //   if (index === i) {
    //     continue;
    //   }
    //   tempArray.push(tasks[i])
    // }
    // console.log(tempArray ,'temparray')
    setTasks(tempArray);
  }

  function submitHandler(newTask, index) {
    // tasks[index] = newTask;
    // const tempArray= tasks
    // console.log("line indie sh", tempArray);

    setTasks(
      tasks.map((task, i) => {
        
        if (i !== index) {
          return task;
        }
        return newTask;
      })
    );
  }

  // const renderCount = useRef(0);
  // renderCount.current++;
  // console.log(`App render ${renderCount.current}`)

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
              setTasks(_.concat(tasks, newMainTask));
              setNewMainTask("");
            }}
          >
            Add
          </button>
          {tasks.map((task, index) => (
            <Task
              task={task}
              index={index}
              deleteHandler={deleteHandler}
              submitHandler={submitHandler}
              tasks={tasks}
            />
          ))}
        </center>
      </div>
    </div>
  );
}

export default App;
