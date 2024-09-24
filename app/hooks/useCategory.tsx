import { useEffect, useState } from "react";
import { fetchCategories } from "../services/category";
import { arrayToOptions } from "../utils/array-to-options";

export const useCategory = () => {
  const [categories, setCategories] = useState<
    {
      label: string;
      value: string;
    }[]
  >([]);
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { categories } = await fetchCategories();
        setCategories(arrayToOptions(categories));
      } catch (error) {
        console.error(error);
        setError("Failed to fetch Categories.");
      } finally {
        setLoading(false);
      }
    };
    getCategories();
  }, []);

  return { handleCategoryChange, selectedCategory, categories, error, loading };
};
