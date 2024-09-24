import React from "react";
import { render, screen } from "@testing-library/react";
import { Table } from "./Table";
import { Column } from "./Table.types";

interface Product {
  id: number;
  title: string;
  price: number;
}

const mockData: Product[] = [
  { id: 1, title: "Product 1", price: 10 },
  { id: 2, title: "Product 2", price: 20 },
  { id: 3, title: "Product 3", price: 30 },
];

const columns: Column<Product>[] = [
  { key: "id", header: "ID" },
  { key: "title", header: "Title" },
  { key: "price", header: "Price" },
];

test("renders table headers", () => {
  render(
    <Table
      currentPage={1}
      setCurrentPage={jest.fn()}
      data={mockData}
      columns={columns}
    />
  );
  expect(screen.getByText("ID")).toBeInTheDocument();
  expect(screen.getByText("Title")).toBeInTheDocument();
  expect(screen.getByText("Price")).toBeInTheDocument();
});

test("renders table rows with data", () => {
  render(
    <Table
      currentPage={1}
      setCurrentPage={jest.fn()}
      data={mockData}
      columns={columns}
    />
  );
  expect(screen.getByText("Product 1")).toBeInTheDocument();
  expect(screen.getByText("10")).toBeInTheDocument();
});
