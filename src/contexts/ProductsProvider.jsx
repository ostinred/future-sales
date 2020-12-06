import React, { createContext, useState } from "react";
import _ from "lodash";

const productsExample = [
  {
    id: 2,
    category: "Nature",
    title: "Dog",
    images: "",
    description: "desc",
    buyingPrice: 23,
    sellingPrice: 20,
    sellingDate: 12,
    publishedAt: '01 19 2020',
    seller: 'linkToProfile',
    viewsCount: 3,
    status: 'active'
  },
]

export const ProductContext = createContext(productsExample);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productsExample);

  const setProduct = (product) => {
    setProducts((prev) => [
      ...prev,
      product,
    ]);
    return products
  };

  const getAllProducts = () => {
    return [...products]
  }

  const deleteProduct = (id) => {
    const filtered = _.filter(products, (o) => o.id !== id);
    setProducts(filtered);
    return [...products]
  }

  const getProduct = (id) => {
    return _.find(products, (o) => o.id === id);
  }

  const ctx = {
    setProduct,
    getAllProducts,
    deleteProduct,
    getProduct,
  }
  return <ProductContext.Provider value={ ctx }>{ children }</ProductContext.Provider>;
};
