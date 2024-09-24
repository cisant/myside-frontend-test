"use client";

import { useEffect, useState } from "react";
import { fetchProducts } from "../services/product";
import { Product } from "../(pages)/products/list/types";
import { ROWS_PER_PAGE } from "../utils/constants";

export const useProduct = (selectedCategory: string | undefined) => {
  const [page, setPage] = useState<number>(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getProducts = async (currentPage: number) => {
    try {
      const { products } = await fetchProducts(
        currentPage,
        ROWS_PER_PAGE,
        selectedCategory
      );
      setProducts(products);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    getProducts(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  // TODO: Improve this by sending the param to backend
  const handleSearch = async (query: string) => {
    if (query === "") {
      await getProducts(1);
      return;
    }
    setProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return { products, loading, error, page, setPage, handleSearch };
};
