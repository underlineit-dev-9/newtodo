import { render, screen, fireEvent, getAllByTestId,userEvent } from "@testing-library/react";

import Task from "./task";
import App from "./App";

test("testing the test line",()=>{
    render(<Task/>)
    const test = screen.getByText(/hii this is test/i);

    expect(test).toBeInTheDocument()
})