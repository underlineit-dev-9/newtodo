import { useState } from "react";
import _ from "lodash";

function useTasks() {
  const [tasks, setTasks] = useState(["task 1", "task 2", "task 3", "task 4"]);

  function addHandler(newTask) {
    setTasks(_.concat(tasks, newTask));
  }

  function deleteHandler(index) {
    const tempArray = _.remove(tasks, (element) => {
      return tasks.indexOf(element) !== index;
    });

    setTasks(tempArray);
  }

  function submitHandler(newTask, index) {
    setTasks(
      tasks.map((task, i) => {
        if (i !== index) {
          return task;
        }
        return newTask;
      })
    );
  }

  return { tasks, submitHandler, deleteHandler, addHandler };
}

export default useTasks;
