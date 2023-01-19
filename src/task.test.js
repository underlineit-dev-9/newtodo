import { render, fireEvent } from "@testing-library/react";
import Task from "./task";
import App from "./App";

test("testing delete button and fucntion calling", () => {
  const mockDeleteHandlerdFun = jest.fn();
  let index=2;
  const { getByTestId } = render(
    <Task deleteHandler={mockDeleteHandlerdFun}
    index={index}
     />
  );
  const button = getByTestId(`delete-button-${index}`);
  fireEvent.click(button);
  expect(mockDeleteHandlerdFun).toHaveBeenCalled();
});


test("input from Edit Button value ", () => {

    const { getByTestId } = render(<Task/>);

    const editButton=getByTestId('edit-button')
    fireEvent.click(editButton)  


    const input = getByTestId("EditInputId");
    fireEvent.change(input, { target: { value: "new text entered" } });
    expect(input.value).toBe("new text entered");

  });
test("testing the submit button and function calling" ,()=>{

    const mockSubmitHandler = jest.fn();
    const {getByTestId}=render(<Task
      submitHandler={mockSubmitHandler}
    />)

    const editButton=getByTestId('edit-button')
    fireEvent.click(editButton) 

    const button = getByTestId('submit-button');
    fireEvent.click(button);
    expect(mockSubmitHandler).toHaveBeenCalled()

  

  })

test ("testing the cancel button",()=>{
  const { getByTestId } = render(<Task/>);

  const editButton=getByTestId('edit-button')
  fireEvent.click(editButton)  

  const input = getByTestId("EditInputId");
  fireEvent.change(input, { target: { value: "new text entered" } });
  expect(input.value).toBe("new text entered");

  const cancelButton = getByTestId("cancel-button");
  fireEvent.click(cancelButton);
  render(<App/>)

//   const editedTask = screen.querryByText(input.value)

//   expect(editedTask).not.TobeInTheDocumet()
})