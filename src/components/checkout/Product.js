import React from 'react';
import {getSellingDate} from "../../utils/getSellingDate";

const Product = ({ product }) => {
  const productImage = product.images[0];

  return (
    <figure className='productInfo'>
      <div className='imageContainer'>
        <img src={productImage} alt={product.title} />
      </div>
      <figcaption>
        <h3>{product.title}</h3>
        <p><span className='label'>Full Price</span> <span className='value'>&#36;{product.sellingPrice}</span></p>
        <p><span className='label'>Selling Date</span> <span className='value'>{getSellingDate(product)}</span></p>
      </figcaption>
    </figure>
  );
};

export default Product;