import React from 'react';
import BackButton from "../../components/BackButton";
import CheckoutProgress from "../../components/checkout/CheckoutProgress";
import {STEP_PAYMENT, STEP_SHIPMENT} from "./constants";

const Header = (props) => {
  const renderStepNumber = (currentStep) => {
    switch (currentStep) {
      case STEP_SHIPMENT:
        return 'Step 1';
      case STEP_PAYMENT:
        return 'Step 2';
      default:
        return 'Step 3';
    }
  }

  return (
    <section className='checkoutHeader'>
      <BackButton />
      <p className="currentStep">{renderStepNumber(props.currentStep)}</p>
      <h1>Checkout</h1>
      <CheckoutProgress step={props.currentStep}/>
    </section>
  );
};

export default Header;