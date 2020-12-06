import React, {useState} from 'react';
import Product from "../../components/checkout/Product";
import {Redirect} from "react-router-dom";
import finish from '../../images/finish.png'

const Finish = (props) => {
  const [redirect, setRedirect] = useState(false);

  const backToShop = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to='/'/>;
  }

  return (
    <section className='pageContent'>
      <div className='pageBody'>
        <figure className='finish'>
          <div className='imageContainer'>
            <img src={finish} alt="Finish"/>
          </div>
          <figcaption>
            <h4>You successfully committed to the product</h4>
            <p>It will be displayed in deals section</p>
          </figcaption>
        </figure>
      </div>

      <div className='formFooter'>
        <Product product={props.product}/>
        <hr/>
        <div className="actionWrapper">
          <button className="submitBtn" type="button" onClick={() => backToShop()}>
            Back to shop
          </button>
        </div>
      </div>
    </section>
  );
};

export default Finish;