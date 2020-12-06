import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

import { ProductContext } from '../contexts/ProductsProvider';
import { PAGE_TRANSITION, PAGE_VARIANT_BASIC } from '../constants';
import { HOME_PAGE, NOTIFICATION_PAGE, SEARCH_PAGE } from '../router/routes';
import ProductItem from '../components/ProductItem';

const WishList = () => {
  const history = useHistory();
  const { getAllProducts } = useContext(ProductContext);
  const products = getAllProducts();

  const onSearchPageClick = () => history.push(SEARCH_PAGE);
  const onNotificationPageClick = () => history.push(NOTIFICATION_PAGE);

  const getProductLink = (productId) => {
    return `/product/${productId}`;
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={PAGE_TRANSITION}
      variants={PAGE_VARIANT_BASIC}>
      <Layout>
        <Header>
          <div className="is-header__button" onClick={onSearchPageClick}>
            <i className="icon-loop" />
          </div>
          <div className="is-header__button" onClick={onNotificationPageClick}>
            <span className="is-header__label">2</span>
            <i className="icon-bell" />
          </div>
        </Header>
        <main className="main-wrapper wishlist">
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
        </main>
        <NavBar />
      </Layout>
    </motion.div>
  );
};

export default WishList;
