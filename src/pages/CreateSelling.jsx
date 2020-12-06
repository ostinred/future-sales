import React, { useContext } from 'react';
import { ProductContext } from "../contexts/ProductsProvider.jsx";
import Layout from '../components/Layout';

const CreateSelling = () => {
  const { getAllProducts, setProduct } = useContext(ProductContext)

  return (
    <Layout classNamePage="homepage">
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
  );
};

export default CreateSelling;
