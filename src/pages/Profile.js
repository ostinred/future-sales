import React from 'react';
import { motion } from 'framer-motion';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

import { PAGE_TRANSITION, PAGE_VARIANT_BASIC } from '../constants';

const Profile = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={PAGE_TRANSITION}
      variants={PAGE_VARIANT_BASIC}>
      <Layout classNamePage="with-navbar">
        <NavBar />
        <div className="profileWrapper">
          <div className="headerSection">
            <div className="profilePhoto">
              <img />
            </div>
          </div>
        </div>
      </Layout>
    </motion.div>
  );
};

export default Profile;
