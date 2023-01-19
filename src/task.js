// import React,{useRef} from "react";
import React from "react";




const Task = ({
  task,
  index,
  deleteHandler,
  tasks,
  submitHandler,
  
}) => {
  const [canEdit, setCanEdit] = React.useState(false);
  const [newTask, setNewTask] = React.useState(task);
  // const renderCount = useRef(0);
  // renderCount.current++;
  // console.log(`task ${index+1} render ${renderCount.current} `)
  // console.log(`task :${task}`);
  return (
    <div>
      {
        <div>
          <div title="displayingTask">
            {canEdit ? (
              <div>
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  data-testid="EditInputId"
                />
                <button
                  onClick={() => {
                    submitHandler(newTask, index);
                    setCanEdit(false);
                  }}
                  data-testid='submit-button'
                >
                  Submit
                </button>
                &nbsp;
                <button
                  onClick={() => {
                    setNewTask(task);
                    setCanEdit(false);
                  }}
                  data-testid="cancel-button"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <h4>
                {" "}
                {index + 1}. {task}
              </h4>
            )}
            &nbsp;
            <button data-testid='edit-button' onClick={() => setCanEdit(true)}>Edit</button>
            <button
              onClick={() => deleteHandler(index)}
              data-testid={`delete-button-${index}`}
            >
              Delete
            </button>
          </div>
        </div>
      }
    </div>
  );
};

export default Task;
