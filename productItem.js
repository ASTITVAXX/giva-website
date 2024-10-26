// src/components/ProductItem.js
import React from 'react';
import productService from '../services/productService';

function ProductItem({ product, refreshProducts }) {
  const handleDelete = async () => {
    await productService.deleteProduct(product.id);
    refreshProducts();
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ProductItem;
