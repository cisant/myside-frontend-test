import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

test("renders button with correct text", () => {
  render(<Button onClick={jest.fn()}>Click Me</Button>);
  expect(screen.getByText("Click Me")).toBeInTheDocument();
});

test("calls onClick when button is clicked", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);

  const button = screen.getByText("Click Me");
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
