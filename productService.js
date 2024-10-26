// src/services/productService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/products';

const getProducts = () => axios.get(API_URL);
const addProduct = (product) => axios.post(API_URL, product);
const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);

export default {
  getProducts,
  addProduct,
  deleteProduct
};

