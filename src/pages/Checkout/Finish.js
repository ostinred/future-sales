import React, {useState} from 'react';
import Product from "../../components/checkout/Product";
import {Redirect} from "react-router-dom";

const Finish = (props) => {
  const [redirect, setRedirect] = useState(false);

  const backToShop = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to='/'/>;
  }

  return (
    <section className='finish'>
      <figure>
        <img src="../../images/finish.png" alt="Finish"/>
        <figcaption>
          <h4>You successfully committed to the product</h4>
          <p>It will be displayed in deals section</p>
        </figcaption>
      </figure>

      <div className='formFooter'>
        <Product product={props.product}/>
        <hr/>
        <button className="submitBtn" type="button" onClick={() => backToShop()}>
          Back to shop
        </button>
      </div>
    </section>
  );
};

export default Finish;