"use client";

import { useEffect, useState } from "react";
import { fetchProducts, getProduct } from "../services/product";
import { Product } from "../(pages)/products/list/types";
import { ROWS_PER_PAGE } from "../utils/constants";
import { useRouter } from "next/navigation";
import { frontEndRoutes } from "../config/frontEndRoutes";

export const useProduct = (selectedCategory?: string) => {
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>();
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

  const getProductDetails = async (productId: number) => {
    try {
      const { product } = await getProduct(productId);
      setProduct(product);
    } catch (error) {
      console.error(error);
      setError("Failed to get product details.");
    } finally {
      setLoading(false);
    }
  };

  const backToProductList = () => {
    router.push(frontEndRoutes.product.list());
  };

  const handleRowClick = (product: Product) => {
    router.push(frontEndRoutes.product.view(product.id));
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

  return {
    products,
    product,
    loading,
    error,
    page,
    setPage,
    handleSearch,
    handleRowClick,
    getProductDetails,
    backToProductList,
  };
};
