import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("Rendering h3 tag", () => {
  render(<App />);
  const taskElement = screen.getByText(/To Do Management System/i);
  expect(taskElement).toBeInTheDocument();
});

test("Rendering h4 tag", () => {
  render(<App />);
  const task1 = screen.getByText(/task 1/i);
  expect(task1).toBeInTheDocument();

  const task2 = screen.getByText(/task 2/i);
  expect(task2).toBeInTheDocument();

  const task3 = screen.getByText(/task 3/i);
  expect(task3).toBeInTheDocument();

  const task4 = screen.getByText(/task 4/i);
  expect(task4).toBeInTheDocument();
  
});





test("testing delete buttun", () => {
  render(<App />);
  const button2 = screen.getByTestId("delete-button-2");
  userEvent.click(button2);
  const task2 = screen.queryByText(/task 2/i);
  const task3 = screen.queryByText(/task 3/i);
  expect(task2).toBeInTheDocument();
  expect(task3).not.toBeInTheDocument();
});

test("input from add value ", () => {
  
  const { getByTestId } = render(<App/>);
  const input = getByTestId("inputId");
  fireEvent.change(input, { target: { value: "new text entered" } });
  expect(input.value).toBe("new text entered");

  // const button=screen.getAllByTestId('add-button')
  // fireEvent.click(button)

  // const inputTask = screen.queryByText(/new text entered/i)
  // expect(inputTask).toBeInTheDocument()
});

