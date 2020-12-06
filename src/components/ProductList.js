import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductsProvider';
import ProductItem from './ProductItem';

const ProductList = ({ title, link }) => {
  const { getAllProducts } = useContext(ProductContext);
  const products = getAllProducts().sort(function (a, b) {
    if (a.publishedAt > b.publishedAt) {
      return 1;
    }
    return -1;
  });
  const getProductLink = (productId) => {
    return `/product/${productId}`;
  };

  return (
    <div className="product-list">
      <div className="product-list__header">
        <h2 className="product-list__title">{title}</h2>
        <NavLink to={link}>
          See All
          <i className="icon-arrow-right" />
        </NavLink>
      </div>
      <div className="products-row">
        {products.map(
          ({ id, title, buyingPrice, sellingPrice, images, sellingDate }) => (
            <ProductItem
              key={id}
              name={title}
              oldPrice={buyingPrice}
              newPrice={sellingPrice}
              image={images[0]}
              productLink={getProductLink(id)}
              sellingDate={sellingDate}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ProductList;
