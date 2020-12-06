import React, { createContext, useState } from "react";
import _ from "lodash";

const productsExample = [
  {
    id: "4ec85ba4-f933-463e-a4a4-4484ef239aad",
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
    id: "7b4a4c3e-8433-4075-a4c8-0e4ef78f15ad",
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
    id: "ee22d980-5c67-44ff-8abc-8b6a2d4f3dd0",
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
    id: "23ff0663-b2ba-40cc-956d-227cf6e365f7",
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
