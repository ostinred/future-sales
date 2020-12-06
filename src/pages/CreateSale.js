import React from 'react';
import { motion } from 'framer-motion';

import Header from '../components/Header';
import Layout from '../components/Layout';

import { PAGE_VARIANT_BASIC, PAGE_TRANSITION } from '../constants';

const CreateSale = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={PAGE_TRANSITION}
      variants={PAGE_VARIANT_BASIC}>
      <Header />
      <Layout classNamePage="create-sale-page">
      <div className="section">
        <div className="photo">
          <h2>Add Photo</h2>
          <div className="addPhotoContainer">
            <img src="./add.svg" alt="photo" />
          </div>
        </div>
      </div>
      <div className="section">
        <h2>Product</h2>
        <input className="input" type="text" placeholder="e.g. Iphone" />
      </div>
      <div className="section">
        <h2>Buying price</h2>
        <input className="input" type="text" placeholder="$" />
      </div>
      <div className="section">
        <h2>Selling price</h2>
        <input className="input" type="text" placeholder="$" />
      </div>
      <div className="section">
        <h2>Selling date</h2>
        <input className="input" type="text" placeholder="After 3 month" />
      </div>
      </Layout>
    </motion.div>
  );
};

export default CreateSale;
