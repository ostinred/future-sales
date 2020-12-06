import React from 'react';
import { motion } from 'framer-motion';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

import Categories from '../components/Categories';
import ProductList from '../components/ProductList';

import { PAGE_TRANSITION, PAGE_VARIANT_BASIC } from '../constants';
import { HOME_PAGE } from '../router/routes';

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={PAGE_TRANSITION}
      variants={PAGE_VARIANT_BASIC}>
      <Layout>
        <Header />
        <main>
          <Categories />
          <ProductList title="The most popular" link={HOME_PAGE} />
          <ProductList title="Top sales" link={HOME_PAGE} />
        </main>
        <NavBar />
      </Layout>
    </motion.div>
  );
};

export default Home;
