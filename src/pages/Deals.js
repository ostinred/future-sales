import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import _ from 'lodash';

import { useStore } from '../hooks/useStore.jsx';

import Header from '../components/Header';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

import { ProductItem } from '../ui/ProductItem.jsx';

import { PAGE_TRANSITION, PAGE_VARIANT_BASIC } from '../constants';

import { NOTIFICATION_PAGE, SEARCH_PAGE } from '../router/routes';

const Deals = () => {
  const [tab, setTab] = useState('selling');
  const {
    getAllCommitments,
    getAllProducts,
    getUserInfo,
    getProduct,
  } = useStore();

  const history = useHistory();

  const onSearchPageClick = () => history.push(SEARCH_PAGE);
  const onNotificationPageClick = () => history.push(NOTIFICATION_PAGE);
  const userInfo = getUserInfo();

  const commitments = _.reverse(_.sortBy(getAllCommitments(), ['createdAt']));
  const selling = _.reverse(_.sortBy(_.filter(getAllProducts(), (product) => {
    return product.seller === userInfo.id;
  }), ['publishedAt']));

  const isSellingTab = tab === 'selling';
  const isCommitmentsTab = tab === 'commitments';

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
        <main className="main-wrapper">
          <div className="tabs">
            <button
              onClick={() => setTab('selling')}
              className={isSellingTab ? 'activeTab' : ''}>
              Selling
            </button>
            <button
              onClick={() => setTab('commitments')}
              className={isCommitmentsTab ? 'activeTab' : ''}>
              Commitment
            </button>
          </div>
          <div className="list">
            {isSellingTab && selling.length > 0 ? (
                selling.map((product) => (
                  <ProductItem isSelling key={product.id} product={product} />
                ))
              ) : isSellingTab && (
                <p>There is no selling yet...</p>
              )}

            {isCommitmentsTab && commitments.length > 0 ? (
              commitments.map((commitment) => {
                const product = getProduct(commitment.product);
                return <ProductItem key={commitment.id} product={product} />;
              })
            ) : isCommitmentsTab && (
              <p>There is no commitment yet...</p>
            )}
          </div>
        </main>

        <NavBar />
      </Layout>
    </motion.div>
  );
};

export default Deals;
