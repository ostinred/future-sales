import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { mixed, object, string } from 'yup';

import { ProductContext } from '../contexts/ProductsProvider.jsx';
import { useStore } from '../hooks/useStore.jsx';

import Header from '../components/Header';
import Layout from '../components/Layout';

import { PAGE_TRANSITION, PAGE_VARIANT_RIGHT } from '../constants';
import { v4 } from 'uuid';

export const schema = object().shape({
  title: string().required(),
  description: string().required(),
  buyingPrice: string().required(),
  sellingPrice: string().required(),
  image: mixed().required('Image is required'),
});

const CreateSale = () => {
  let history = useHistory();
  const { setProduct } = useContext(ProductContext);
  const { getUserInfo } = useStore();
  const [imgs, setImg] = useState([]);
  const [productTitlePlaceholder, setProductTitlePlaceholder] = useState("e.g. Iphone");
  const userInfo = getUserInfo();
  const resetProductTitlePlaceholder = () => {
    setProductTitlePlaceholder('e.g. Iphone');
  };

  const { register, handleSubmit, errors, setValue, getValues } = useForm({
    shouldFocusError: true,
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    const { title, description, buyingPrice, sellingPrice, sellingDate } = data;

    const productInstance = {
      id: v4(),
      category: 'Other',
      title,
      description,
      buyingPrice,
      sellingPrice,
      sellingDate,
      publishedAt: Date.now(),
      seller: userInfo.id,
      viewCount: 3,
      status: 'active',
      images: imgs,
    };
    setProduct(productInstance);
    history.push('/future-sales/deals');
  };

  const recognizeImage = (imgContent) => {
      const currentValue = getValues('title');

      if (currentValue && currentValue.trim().length > 0) {
        return
      }

      if (!imgContent) {
        return
      }

      const imageParts = imgContent.split(',');

      if (imageParts.length !== 2) {
        return
      }
      setProductTitlePlaceholder('Extracting from image...');
      const req = fetch('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyC-QIBDTMXex2NvtYVcr_9YSJcEvB2yKRM', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "requests": [
            {
              "features": [
                {
                  "type": "WEB_DETECTION"
                }
              ],
              "image": {
                "content": imageParts[1]
              }
            }
          ]
        })
      });

      req.then((response) => {
        return response.json();
      }).then((content) => {
        if(content && content.responses && content.responses.length > 0 && content.responses[0].webDetection) {
          const webDetection = content.responses[0].webDetection;

          if (webDetection.bestGuessLabels && webDetection.bestGuessLabels.length > 0) {
            const productTitle = webDetection.bestGuessLabels[0].label;
            const currentTitle = getValues('title');

            if (currentTitle.trim().length === 0) {
              setValue('title', productTitle);
            }
          }
        }
      }).finally(() => {
        resetProductTitlePlaceholder();
      });
  }

  const onFileAttached = (event) => {
    if (event.target.files?.length) {
      const { files } = event.target;
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setImg((prev) => [...prev, `${reader.result}`]);
          recognizeImage(`${reader.result}`);
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };
  const removeImg = (index) => {
    const filtered = imgs.filter((_, i) => i !== index);
    setImg(filtered);
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={PAGE_TRANSITION}
      variants={PAGE_VARIANT_RIGHT}>
      <Layout>
        <Header back={true} title="Create Selling" />
        <main>
          <section className="createSellingPage">
            <form
              className="formCreateSelling"
              onSubmit={handleSubmit(onSubmit)}>
              <div className="whiteBgc">
                <div className="section">
                  <div className="photo">
                    <h2>Add Photo</h2>
                    <div className="photosContainer">
                      {imgs.length !== 0
                        ? imgs.map((imgItem, i) => (
                            <div key={imgItem} className="photoItem">
                              <span
                                onClick={() => {
                                  removeImg(i);
                                }}
                                className="deleteImg">
                                <img src="./cancel.svg" alt="Cancel" />
                              </span>
                              <img
                                className="image"
                                src={imgItem}
                                alt="Product"
                              />
                            </div>
                          ))
                        : null}

                      <label className="addPhotoContainer" htmlFor="inputFile">
                        <img className="icon" src="./add.svg" alt="Upload" />
                      </label>
                      <input
                        accept="image/png, image/jpg, image/jpeg,"
                        type="file"
                        name="image"
                        ref={register}
                        onChange={onFileAttached}
                        id="inputFile"
                      />
                    </div>
                    {errors.image && (
                      <span className="inputError">
                        {errors.image?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="section">
                  <h2>Product</h2>
                  <input
                    ref={register}
                    name="title"
                    className="input"
                    type="text"
                    placeholder={productTitlePlaceholder}
                  />
                  {errors.title && (
                    <span className="inputError">{errors.title?.message}</span>
                  )}
                </div>
                <div className="section">
                  <h2>Description</h2>
                  <textarea
                    ref={register}
                    name="description"
                    className="textarea"
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
                    type="number"
                    min="0"
                    placeholder="$"
                  />
                  {errors.buyingPrice && (
                    <span className="inputError">
                      {errors.buyingPrice?.message}
                    </span>
                  )}
                </div>
                <div className="section">
                  <h2>Selling price</h2>
                  <input
                    ref={register}
                    name="sellingPrice"
                    className="input"
                    type="number"
                    min="0"
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
                    type="number"
                    min="0"
                    placeholder="After 3 month"
                  />
                  {errors.sellingDate && (
                    <span className="inputError">
                      {errors.sellingDate?.message}
                    </span>
                  )}
                </div>
              </div>
            </form>
          </section>
        </main>
        <div className="btnSubmitContainer">
          <button
            className="submitBtn"
            type="button"
            onClick={handleSubmit(onSubmit)}>
            Post Now
          </button>
        </div>
      </Layout>
    </motion.div>
  );
};

export default CreateSale;
