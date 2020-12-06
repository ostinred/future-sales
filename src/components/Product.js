import React from 'react';

const Product = ({ image, name, newPrice, oldPrice, date }) => {
  return (
    <div className="product">
      <img src={image} alt="" />
      <p>{name}</p>

      <div className="product-prices">
        <p>{newPrice}</p>
        <p>{oldPrice}</p>
      </div>
      <p className="product-sales-date">
        <i className="icon-clock" />
        After {date}
      </p>
    </div>
  );
};

export default Product;
