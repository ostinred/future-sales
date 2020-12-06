import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductsProvider';

const ProductList = ({ title, link }) => {
  const { getAllProducts } = useContext(ProductContext);

  console.log('useContext', getAllProducts());

  return (
    <div className="product-list">
      <div className="product-list__header">
        <h2 className="product-list__title">{title}</h2>
        <NavLink to={link}>
          See All
          <i className="icon-arrow-right" />
        </NavLink>
      </div>
    </div>
  );
};

export default ProductList;
