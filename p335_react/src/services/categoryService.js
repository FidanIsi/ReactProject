import { httpClient } from "../utils/httpClient";

export const postCategory = (data) => {
  return httpClient.post("category", data);
};

export const getAllCategories = () => {
  return httpClient.get(`category`);
};

export const getCategory = (id) => {
  return httpClient.get(`category/${id}`);
};

export const editCategory = (id, data) => {
  return httpClient.put(`category/${id}`, data);
};

export const deleteCategory = (id) => {
  return httpClient.delete(`category/${id}`);
};