import { httpClient } from "../utils/httpClient";

export const getAllProducts = () => {
  return httpClient.get(`product`);
};

export const getProductById = (id) => {
  return httpClient.get(`product/${id}`)
}

export const postProduct = (data) => {
  return httpClient.post("product", data);
};

export const editProduct = (id, data) => {
  return httpClient.put(`product/${id}`, data);
};

export const deleteProduct = (id) => {
  return httpClient.delete(`product/${id}`);
};