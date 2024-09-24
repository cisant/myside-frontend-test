import { useEffect, useState } from "react";
import { fetchProducts } from "../services/product";
import { Product } from "../(pages)/products/list/types";
import { ROWS_PER_PAGE } from "../utils/constants";

export const useProduct = () => {
  const [page, setPage] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getProducts = async (currentPage: number) => {
    try {
      const productsData = await fetchProducts(currentPage, ROWS_PER_PAGE);
      setProducts(productsData);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts(page);
  }, [page]);

  const handleSearch = async (query: string) => {
    if (query === "") {
      await getProducts(0);
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
