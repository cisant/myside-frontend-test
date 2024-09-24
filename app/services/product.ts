import { API_URL } from "@/app/utils/constants";
import axios from "axios";

export const fetchProducts = async (
  page: number,
  itemsPerPage: number,
  selectedCategory?: string
) => {
  try {
    let url = `${API_URL}/products`;

    if (selectedCategory) {
      url += `/category?type=${selectedCategory}&`;
    } else {
      url += `?`;
    }

    url += `page=${page}&limit=${itemsPerPage}`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProduct = async (productId: number) => {
  try {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching single product:", error);
    throw error;
  }
};
