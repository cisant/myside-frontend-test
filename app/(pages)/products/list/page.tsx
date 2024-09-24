"use client";

import React from "react";
import Image from "next/image";
import { Table } from "@/app/components/molecules/table";
import { useProduct } from "@/app/hooks/useProduct";
import { Product } from "./types";
import { Column } from "@/app/components/molecules/table/types";
import { ROWS_PER_PAGE } from "@/app/utils/constants";

export default function ProductListPage() {
  const { products, page, setPage } = useProduct();

  const columns: Column<Product>[] = [
    { key: "id", header: "ID" },
    { key: "title", header: "Title" },
    { key: "price", header: "Price" },
    { key: "description", header: "Description" },
    {
      key: "image",
      header: "Image",
      render: (product: Product) => (
        <Image src={product.image} alt={product.title} width="50" height="50" />
      ),
    },
  ];

  return (
    <div>
      <h1>Products List</h1>
      <Table
        currentPage={page}
        setCurrentPage={setPage}
        data={products}
        columns={columns}
        rowsPerPage={ROWS_PER_PAGE}
      />
    </div>
  );
}
