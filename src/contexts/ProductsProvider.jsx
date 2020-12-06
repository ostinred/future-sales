import React, { createContext, useState } from 'react';
import _ from 'lodash';
import { productsList } from '../constants/products';

export const ProductContext = createContext(productsList);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productsList);

  const setProduct = (product) => {
    setProducts((prev) => [...prev, product]);
    return products;
  };

  const getAllProducts = () => {
    return [...products];
  };

  const deleteProduct = (id) => {
    const filtered = _.filter(products, (o) => o.id !== id);
    setProducts(filtered);
    return [...products];
  };

  const getProduct = (id) => {
    return _.find(products, (o) => o.id === id);
  };

  const ctx = {
    setProduct,
    getAllProducts,
    deleteProduct,
    getProduct,
  };
  return (
    <ProductContext.Provider value={ctx}>{children}</ProductContext.Provider>
  );
};
