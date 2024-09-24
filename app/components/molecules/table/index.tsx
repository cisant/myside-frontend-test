import React, { useState } from "react";
import { Button } from "../../atoms/button";
import { TableCell } from "../../atoms/table-cell";
import { TableHeader } from "../../atoms/table-header";
import { TableRow } from "../../atoms/table-row";
import { StyledTable, PaginationWrapper } from "./styles";
import { TableProps } from "./types";

export const Table = <T,>({
  data,
  columns,
  rowsPerPage = 5,
}: TableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const startIndex = currentPage * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

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
          {currentData.map((row, rowIndex) => (
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
        <Button onClick={handlePrev} disabled={currentPage === 0}>
          Previous
        </Button>
        <span>
          Page {currentPage + 1} of {totalPages}
        </span>
        <Button onClick={handleNext} disabled={currentPage === totalPages - 1}>
          Next
        </Button>
      </PaginationWrapper>
    </div>
  );
};
