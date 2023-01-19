// import React,{useRef} from "react";
import React from "react";




class Task extends React.Component{
  render(){
  const [canEdit, setCanEdit] = React.useState(false);
  const [newTask, setNewTask] = React.useState(this.task);
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
                    this.submitHandler(newTask, this.index);
                    setCanEdit(false);
                  }}
                  data-testid='submit-button'
                >
                  Submit
                </button>
                &nbsp;
                <button
                  onClick={() => {
                    setNewTask(this.task);
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
                {this.index + 1}. {this.task}
              </h4>
            )}
            &nbsp;
            <button data-testid='edit-button' onClick={() => setCanEdit(true)}>Edit</button>
            <button
              onClick={() => this.deleteHandler(this.index)}
              data-testid={`delete-button-${this.index}`}
            >
              Delete
            </button>
          </div>
        </div>
      }
    </div>
  );
};
};

export default Task;

// import { render, fireEvent } from "@testing-library/react";
// import Task from "./task";
// import App from "./App";

// test("testing delete button and fucntion calling", () => {
//   const mockDeleteHandlerdFun = jest.fn();
//   let index=2;
//   const { getByTestId } = render(
//     <Task deleteHandler={mockDeleteHandlerdFun}
//     index={index}
//      />
//   );
//   const button = getByTestId(`delete-button-${index}`);
//   fireEvent.click(button);
//   expect(mockDeleteHandlerdFun).toHaveBeenCalled();
// });


// test("input from Edit Button value ", () => {

//     const { getByTestId } = render(<Task/>);

//     const editButton=getByTestId('edit-button')
//     fireEvent.click(editButton)  


//     const input = getByTestId("EditInputId");
//     fireEvent.change(input, { target: { value: "new text entered" } });
//     expect(input.value).toBe("new text entered");

//   });
// test("testing the submit button and function calling" ,()=>{

//     const mockSubmitHandler = jest.fn();
//     const {getByTestId}=render(<Task
//       submitHandler={mockSubmitHandler}
//     />)

//     const editButton=getByTestId('edit-button')
//     fireEvent.click(editButton) 

//     const button = getByTestId('submit-button');
//     fireEvent.click(button);
//     expect(mockSubmitHandler).toHaveBeenCalled()

  

//   })

// test ("testing the cancel button",()=>{
//   const { getByTestId } = render(<Task/>);

//   const editButton=getByTestId('edit-button')
//   fireEvent.click(editButton)  

//   const input = getByTestId("EditInputId");
//   fireEvent.change(input, { target: { value: "new text entered" } });
//   expect(input.value).toBe("new text entered");

//   const cancelButton = getByTestId("cancel-button");
//   fireEvent.click(cancelButton);
//   render(<App/>)

//   const editedTask = screen.querryByText(input.value)

//   expect(editedTask).not.TobeInTheDocumet()
// })
