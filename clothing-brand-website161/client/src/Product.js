import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <div>
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;