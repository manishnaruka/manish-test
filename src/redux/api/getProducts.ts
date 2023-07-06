import axios from "axios";

const getProductsApi = async () => {
  const response = await axios.get("https://dummyjson.com/products");
  return response.data;
};

export { getProductsApi };
