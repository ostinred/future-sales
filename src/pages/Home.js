import React from 'react';
import { motion } from 'framer-motion';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

import { PAGE_TRANSITION, PAGE_VARIANT_BASIC } from '../constants';

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={PAGE_TRANSITION}
      variants={PAGE_VARIANT_BASIC}>
      <Layout classNamePage="with-navbar">
        <NavBar />
      </Layout>
    </motion.div>
  );
};

export default Home;
