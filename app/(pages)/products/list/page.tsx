"use client";

import React from "react";
import Image from "next/image";
import { useProduct } from "@/app/hooks/useProduct";
import { Product } from "./types";
import { ROWS_PER_PAGE } from "@/app/utils/constants";
import { SearchBar } from "@/app/components/molecules/searchbar";
import { useCategory } from "@/app/hooks/useCategory";
import { SearchSection } from "./styles";
import { Column } from "@/app/components/molecules/Table/Table.types";
import { Dropdown } from "@/app/components/molecules/Dropdown/Dropdown";
import { Table } from "@/app/components/molecules/Table/Table";

export default function ProductListPage() {
  const {
    categories,
    handleCategoryChange,
    selectedCategory,
    loading: isLoadingCategories,
  } = useCategory();
  const {
    products,
    page,
    setPage,
    handleSearch,
    loading: isLoadingProducts,
  } = useProduct(selectedCategory);

  const columns: Column<Product>[] = [
    { key: "id", header: "ID" },
    { key: "title", header: "Title" },
    { key: "price", header: "Price" },
    {
      key: "description",
      header: "Description",
      render: (product: Product) => {
        return product.description
          ? product.description.slice(0, 150) + "..."
          : "";
      },
    },
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
      <SearchSection>
        {!isLoadingCategories && (
          <Dropdown
            options={categories}
            onChange={handleCategoryChange}
            label="Filter by Category"
          />
        )}
        <SearchBar onSearch={handleSearch} />
      </SearchSection>
      {!isLoadingProducts && (
        <Table
          currentPage={page}
          setCurrentPage={setPage}
          data={products}
          columns={columns}
          rowsPerPage={ROWS_PER_PAGE}
        />
      )}
    </div>
  );
}
