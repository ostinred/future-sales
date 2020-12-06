import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductItem = ({
  image,
  name,
  newPrice,
  oldPrice,
  sellingDate,
  productLink,
}) => {
  return (
    <NavLink exact className="product" to={productLink}>
      <img className="product-image" src={image} alt="" />
      <p className="product-name">{name}</p>

      <div className="product-prices">
        <p className="product-price__new">${newPrice}</p>
        <p className="product_price__old">${oldPrice}</p>
      </div>
      <p className="product-sales-date">
        <i className="icon-clock" />
        After {sellingDate} {sellingDate > 1 ? 'months' : 'month'}
      </p>
    </NavLink>
  );
};

export default ProductItem;
