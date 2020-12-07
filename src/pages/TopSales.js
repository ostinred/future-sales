import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

import { ProductContext } from '../contexts/ProductsProvider';
import { PAGE_TRANSITION, PAGE_VARIANT_RIGHT } from '../constants';
import { HOME_PAGE } from '../router/routes';
import ProductItem from '../components/ProductItem';

const TopSales = () => {
  const { getAllProducts } = useContext(ProductContext);
  const products = getAllProducts();

  const getProductLink = (productId) => {
    return `/product/${productId}`;
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={PAGE_TRANSITION}
      variants={PAGE_VARIANT_RIGHT}>
      <Layout>
        <Header title="Top Sales" back={true} />

        <main className="main-wrapper wishlist categories-page">
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

export default TopSales;
