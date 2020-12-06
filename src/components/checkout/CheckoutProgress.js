import React from 'react';
import {STEP_FINISH, STEP_PAYMENT, STEP_SHIPMENT} from "../../pages/Checkout/constants";

const CheckoutProgress = (props) => {
  const middleClass = props.currentStep === STEP_FINISH ? 'completed' : ''

  return (
    <ul className='checkoutProgress'>
      <li className={props.currentStep === STEP_SHIPMENT ? 'active first': 'first'}>
        <span>Shipment</span>
      </li>
      <li className={props.currentStep === STEP_PAYMENT ? 'active middle': `middle ${middleClass}`}>
        <span>Payment</span>
      </li>
      <li className={props.currentStep === STEP_FINISH ? 'active last': 'last'}>
        <span>Finish</span>
      </li>
    </ul>
  );
};

export default CheckoutProgress;