import React from 'react';
import { motion } from 'framer-motion';

import Header from '../components/Header';
import Layout from '../components/Layout';

import { PAGE_VARIANT_BASIC, PAGE_TRANSITION } from '../constants';

const Deals = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={PAGE_TRANSITION}
      variants={PAGE_VARIANT_BASIC}>
      <Header />
      <Layout classNamePage="deals-page">
        <h1>Deals</h1>
      </Layout>
    </motion.div>
  );
};

export default Deals;
