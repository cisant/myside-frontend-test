import { API_URL } from "@/app/utils/constants";
import axios from "axios";

export const fetchProducts = async (page: number, itemsPerPage: number) => {
  try {
    const response = await axios.get(
      `${API_URL}/products?page=${page}&limit=${itemsPerPage}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
