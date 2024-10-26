// src/components/ProductForm.js
import React, { useState } from 'react';
import productService from '../services/productService';

function ProductForm({ refreshProducts }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await productService.addProduct({ name, price });
    setName('');
    setPrice('');
    refreshProducts();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ProductForm;
