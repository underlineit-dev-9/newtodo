import { useState } from "react";
import "./App.css";
import Task from "./task";
import _ from "lodash";


function App() {

  const [newMainTask, setNewMainTask] = useState("");

  const [tasks, setTasks] = useState(["task 1", "task 2", "task 3", "task 4"]);

  function deleteHandler(index) {
    const tempArray = _.remove(tasks, (element) => {
      return tasks.indexOf(element) !== index;
    });
    
    setTasks(tempArray);
  }

  function submitHandler(newTask, index) {
    
    if(newTask===''){
      alert("you are not allowed to enter empty box")
    }
    else{
    setTasks(
      _.concat(tasks.slice(0,index),newTask,tasks.slice(index+1)))
    
  }}
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
            onChange={(e) => {setNewMainTask(e.target.value)}}
          />{" "}
          &nbsp;
          <button
            data-testid="add-button"
            onClick={() => {
              if(newMainTask===''){
                alert("you are not allowed to use empty box")
              }else{
              setTasks(_.concat(tasks, newMainTask));
              setNewMainTask("");
            }}}
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
              key={index}
            />
          ))}
        </center>
      </div>
    </div>
  );
}

export default App;
