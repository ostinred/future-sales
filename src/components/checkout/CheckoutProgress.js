import React from 'react';
import {STEP_FINISH, STEP_PAYMENT, STEP_SHIPMENT} from "../../pages/Checkout/constants";

const CheckoutProgress = (props) => {
  return (
    <ul>
      <li className={props.currentStep === STEP_SHIPMENT ? 'active': ''}>
        <span>Shipment</span>
      </li>
      <li className={props.currentStep === STEP_PAYMENT ? 'active': ''}>
        <span>Payment</span>
      </li>
      <li className={props.currentStep === STEP_FINISH ? 'active': ''}>
        <span>Finish</span>
      </li>
    </ul>
  );
};

export default CheckoutProgress;