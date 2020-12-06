import React from 'react';
import { v4 } from 'uuid';
import { motion } from 'framer-motion';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object } from 'yup';

import Header from '../components/Header';
import Layout from '../components/Layout';

import { PAGE_TRANSITION, PAGE_VARIANT_RIGHT } from '../constants';

export const schema = object().shape({
  title: string().required(),
  description: string().required(),
  buyingPrice: string().required(),
  sellingPrice: string().required(),
});

const CreateSale = () => {
  const { register, handleSubmit, errors, setError, clearErrors } = useForm({
    shouldFocusError: true,
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = ({
    title,
    description,
    buyingPrice,
    sellingPrice,
    sellingDate,
  }) => {
    const productShape = {
      id: v4(),
      category: 'Other',
      title,
      description,
      buyingPrice,
      sellingPrice,
      sellingDate,
      publishedAt: '12 December 2020',
      seller: 'Mark Doy',
      viewCount: 3,
      status: 'active',
    };
    console.log(productShape);
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={PAGE_TRANSITION}
      variants={PAGE_VARIANT_RIGHT}>
      <Header />
      <Layout classNamePage="create-sale-page">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="whiteBgc">
            <div className="section">
              <div className="photo">
                <h2>Add Photo</h2>
                <div className="addPhotoContainer">
                  <img src="./add.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="section">
              <h2>Product</h2>
              <input
                ref={register}
                name="title"
                className="input"
                type="text"
                placeholder="e.g. Iphone"
              />
              {errors.title && (
                <span className="inputError">{errors.title?.message}</span>
              )}
            </div>
            <div className="section">
              <h2>Description</h2>
              <input
                ref={register}
                name="description"
                className="input"
                type="text"
                placeholder="Type smothing about future deal..."
              />
              {errors.description && (
                <span className="inputError">
                  {errors.description?.message}
                </span>
              )}
            </div>
            <div className="section">
              <h2>Buying price</h2>
              <input
                ref={register}
                name="buyingPrice"
                className="input"
                type="text"
                placeholder="$"
              />
              {errors.buyingPrice && (
                <span className="inputError">
                  {errors.buyingPrice?.message}
                </span>
              )}
            </div>
            <div className="section">
              <h2>Selling date</h2>
              <input
                ref={register}
                name="sellingPrice"
                className="input"
                type="text"
                placeholder="$"
              />
              {errors.sellingPrice && (
                <span className="inputError">
                  {errors.sellingPrice?.message}
                </span>
              )}
            </div>
            <div className="section">
              <h2>Selling date</h2>
              <input
                ref={register}
                name="sellingDate"
                className="input"
                type="text"
                placeholder="After 3 month"
              />
              {errors.sellingDate && (
                <span className="inputError">
                  {errors.sellingDate?.message}
                </span>
              )}
            </div>
          </div>
          <button className="submitBtn" type="submit">
            Post Now
          </button>
        </form>
      </Layout>
    </motion.div>
  );
};

export default CreateSale;
