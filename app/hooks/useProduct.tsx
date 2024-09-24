import { useEffect, useState } from "react";
import { fetchProducts } from "../services/product";
import { Product } from "../(pages)/products/list/types";
import { ROWS_PER_PAGE } from "../utils/constants";

export const useProduct = () => {
  const [page, setPage] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts(page, ROWS_PER_PAGE);
        setProducts(productsData);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [page]);

  return { products, loading, error, page, setPage };
};
