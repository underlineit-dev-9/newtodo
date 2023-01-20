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
      _.set(tasks, index, newTask)
    );
  }
  console.log("tasks line in usetask", tasks);

  return { tasks, submitHandler, deleteHandler, addHandler };
}

export default useTasks;
