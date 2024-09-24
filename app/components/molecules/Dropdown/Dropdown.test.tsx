import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Dropdown } from "./Dropdown";

const mockOptions = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
];

test("renders dropdown with options", () => {
  render(<Dropdown options={mockOptions} onChange={jest.fn()} />);

  expect(screen.getByText("Option 1")).toBeInTheDocument();
  expect(screen.getByText("Option 2")).toBeInTheDocument();
});

test("calls onChange when an option is selected", () => {
  const handleChange = jest.fn();
  render(<Dropdown options={mockOptions} onChange={handleChange} />);

  const select = screen.getByRole("combobox");
  fireEvent.change(select, { target: { value: "2" } });

  expect(handleChange).toHaveBeenCalledWith("2");
});
