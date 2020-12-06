import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { useStore } from '../hooks/useStore.jsx'

import Header from "../components/Header"
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

import { ProductItem } from '../ui/ProductItem.jsx'

import { PAGE_TRANSITION, PAGE_VARIANT_BASIC } from '../constants';

const Deals = () => {
  const [tab, setTab] = useState("selling");
  const { getAllCommitments, getAllProducts, getUserInfo, getProduct } = useStore()

  const commitments = getAllCommitments();
  const selling = getAllProducts();
  const userInfo = getUserInfo()

  const isSellingTab = tab === "selling"
  const isCommitmentsTab = tab === "commitments"

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={ PAGE_TRANSITION }
      variants={ PAGE_VARIANT_BASIC }>
      <Header />
      <Layout classNamePage="with-navbar">
        <NavBar />
        <div className="tabs">
          <button onClick={ () => setTab("selling") } className={ isSellingTab ? 'activeTab' : "" }>Selling</button>
          <button onClick={ () => setTab("commitments") } className={ isCommitmentsTab ? 'activeTab' : "" }>Commitment</button>
        </div>
        <div className="list">
          { isSellingTab && <p>There is no selling yet..</p> }
          { isSellingTab && isSellingTab.length > 0 ? selling.filter((o) => o.id === userInfo.id).map(product => <ProductItem isSelling key={ product.id } product={ product } />) : null }
          { isCommitmentsTab && commitments.map(commitment => {
            const product = getProduct(commitment.id)
            return <ProductItem key={ commitment.id } product={ product } />
          })
          }
        </div>
      </Layout>
    </motion.div>
  );
};

export default Deals;
