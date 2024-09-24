import { Dispatch, SetStateAction } from "react";

export interface Column<T> {
  key: keyof T;
  header: string;
  render?: (item: T) => React.ReactNode;
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  rowsPerPage?: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  onRowClick?: (row: T) => void;
}
