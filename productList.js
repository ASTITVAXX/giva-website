// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import productService from '../services/productService';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await productService.getProducts();
    setProducts(response.data);
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <ProductItem key={product.id} product={product} refreshProducts={fetchProducts} />
      ))}
    </div>
  );
}

export default ProductList;
