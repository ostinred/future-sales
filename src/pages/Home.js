import React from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

import Categories from '../components/Categories';
import ProductList from '../components/ProductList';

import { PAGE_TRANSITION, PAGE_VARIANT_BASIC } from '../constants';
import {
  NOTIFICATION_PAGE,
  SEARCH_PAGE,
  MOST_POPULAR_PAGE,
  TOP_SALES_PAGE,
  LATEST_PAGE,
} from '../router/routes';

const Home = () => {
  const history = useHistory();

  const onSearchPageClick = () => history.push(SEARCH_PAGE);
  const onNotificationPageClick = () => history.push(NOTIFICATION_PAGE);

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
        <main>
          <Categories />
          <ProductList title="The most popular" link={MOST_POPULAR_PAGE} />
          <ProductList title="Top sales" link={TOP_SALES_PAGE} />
          <ProductList title="The latest" link={LATEST_PAGE} />
        </main>
        <NavBar />
      </Layout>
    </motion.div>
  );
};

export default Home;
