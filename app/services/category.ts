import { API_URL } from "@/app/utils/constants";
import axios from "axios";

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/products/category`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
