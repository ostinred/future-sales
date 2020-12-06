import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Header from '../components/Header';
import Layout from '../components/Layout';
import Input from '../components/Input';

import { PAGE_VARIANT_BASIC, PAGE_TRANSITION } from '../constants';

const Checkout = () => {
  const [name, setName] = useState();

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onPhoneChange = (e) => {
    setName(e.target.value);
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={PAGE_TRANSITION}
      variants={PAGE_VARIANT_BASIC}>
      <Header />
      <Layout classNamePage="checkout-page">
        <h1>Checkout</h1>

        <Input
          label="Name"
          id="name"
          placeholder="Type your name"
          onChange={onNameChange}
        />

        <Input
          label="Phone number"
          id="phone"
          placeholder="Type your number"
          onChange={onPhoneChange}
          type="number"
        />
      </Layout>
      {name ? `Your name - ${name}` : null}
    </motion.div>
  );
};

export default Checkout;
