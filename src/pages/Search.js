import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Input from '../components/Input';

import { ProductContext } from '../contexts/ProductsProvider';
import { PAGE_TRANSITION, PAGE_VARIANT_OPACITY } from '../constants';
import { HOME_PAGE } from '../router/routes';
import ProductItem from '../components/ProductItem';

const Search = () => {
  const { getAllProducts } = useContext(ProductContext);
  const products = getAllProducts().slice(0, 2);

  const [productsList, setProductsList] = useState(products);

  const history = useHistory();
  const onHomePage = () => history.push(HOME_PAGE);

  const handleSearchList = () => setProductsList([]);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={PAGE_TRANSITION}
      variants={PAGE_VARIANT_OPACITY}>
      <Layout>
        <header className="is-header is-header__search">
          <Input placeholder="Search Product" />
          <div className="search-cancel" onClick={onHomePage}>
            Cancel
          </div>
        </header>

        <main className="main-wrapper">
          {productsList.length ? (
            <>
              <div className="search-header">
                <h2 className="search-title">Search history</h2>

                <div className="search-clear" onClick={handleSearchList}>
                  Clear
                  <i className="icon-arrow-right" />
                </div>
              </div>
              <div className="wishlist">
                {productsList.map(
                  ({
                    id,
                    title,
                    buyingPrice,
                    sellingPrice,
                    images,
                    sellingDate,
                  }) => (
                    <ProductItem
                      key={id}
                      name={title}
                      oldPrice={buyingPrice}
                      newPrice={sellingPrice}
                      image={images[0]}
                      productLink={HOME_PAGE}
                      sellingDate={sellingDate}
                    />
                  )
                )}
              </div>
            </>
          ) : (
            <p className="empty-search">Sorry, your history is empty.</p>
          )}
        </main>
        <NavBar />
      </Layout>
    </motion.div>
  );
};

export default Search;
