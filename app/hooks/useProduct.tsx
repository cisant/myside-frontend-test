import { useEffect, useState } from "react";
import { fetchProducts } from "../services/product";
import { Product } from "../(pages)/products/list/types";

export const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return { products, loading, error };
};
