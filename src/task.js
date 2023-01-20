import React from "react";

const Task = ({ index,submitHandler,deleteHandler ,task}) => {

const Task = ({ task, index, deleteHandler, submitHandler }) => {
  const [canEdit, setCanEdit] = React.useState(false);
  const [newTask, setNewTask] = React.useState(task);

  
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
                    if(newTask===''){
                      alert("you are not allowed to enter empty box")
                    }else{
                    submitHandler(newTask, index);
                    setCanEdit(false);
                    }
                  }}
                  data-testid="submit-button"
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
            <button data-testid="edit-button" onClick={() => setCanEdit(true)}>
              Edit
            </button>
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
