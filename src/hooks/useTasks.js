import { useState } from "react";
import _ from "lodash";

function useTasks() {
  const [tasks, setTasks] = useState(["task 1", "task 2", "task 3", "task 4"]);

  //   const [tasksArray, setTasks] = useState(todoTasks);
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
  console.log("tasks line in usetask", tasks);

  return { tasks, submitHandler, deleteHandler, addHandler };
}

export default useTasks;
