import React, { createContext, useState } from "react";
import _ from "lodash";

const productsExample = [
  {
    id: 0,
    category: "Tech",
    title: "Apple",
    images: [],
    description: "desc",
    buyingPrice: 43,
    sellingPrice: 35,
    sellingDate: 2,
    publishedAt: '12 29 2020',
    seller: 'linkToProfile',
    viewsCount: 3,
    status: 'active'
  },
  {
    id: 0,
    category: "Tech",
    title: "Apple",
    images: [],
    description: "desc",
    buyingPrice: 43,
    sellingPrice: 35,
    sellingDate: 2,
    publishedAt: '12 29 2020',
    seller: 'linkToProfile',
    viewsCount: 3,
    status: 'active'
  },
  {
    id: 1,
    category: "Other",
    title: "Book",
    images: [],
    description: "desc",
    buyingPrice: 23,
    sellingPrice: 15,
    sellingDate: 3,
    publishedAt: '12 29 2020',
    seller: 'linkToProfile',
    viewsCount: 3,
    status: 'active'
  },
  {
    id: 2,
    category: "Auto",
    title: "BMW",
    images: [],
    description: "desc",
    buyingPrice: 4343,
    sellingPrice: 3335,
    sellingDate: 9,
    publishedAt: '02 19 2020',
    seller: 'linkToProfile',
    viewsCount: 3,
    status: 'active'
  },
  {
    id: 2,
    category: "Nature",
    title: "Dog",
    images: [],
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

  const ctx = {
    setProduct,
    getAllProducts,
    deleteProduct
  }
  return <ProductContext.Provider value={ ctx }>{ children }</ProductContext.Provider>;
};
