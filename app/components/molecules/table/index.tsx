import React from "react";
import { Button } from "../../atoms/button/Button";
import { TableCell } from "../../atoms/table-cell";
import { TableHeader } from "../../atoms/table-header";
import { TableRow } from "../../atoms/table-row";
import { StyledTable, PaginationWrapper } from "./styles";
import { TableProps } from "./types";

export const Table = <T,>({
  data,
  columns,
  currentPage,
  setCurrentPage,
}: TableProps<T>) => {
  const handleNext = () => {
    setCurrentPage((prev: number) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentPage((prev: number) => Math.max(prev - 1, 0));
  };

  return (
    <div>
      <StyledTable>
        <thead>
          <TableRow>
            {columns.map((column, index) => (
              <TableHeader key={index}>{column.header}</TableHeader>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column, colIndex) => (
                <TableCell key={colIndex}>
                  {column.render
                    ? column.render(row)
                    : (row[column.key] as React.ReactNode)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
      <PaginationWrapper>
        <Button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </Button>
        <span>Page {currentPage}</span>
        <Button onClick={handleNext}>Next</Button>
      </PaginationWrapper>
    </div>
  );
};
