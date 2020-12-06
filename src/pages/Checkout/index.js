import React, {useContext, useState} from 'react';
import {motion} from 'framer-motion';

import Layout from '../../components/Layout';

import {PAGE_TRANSITION, PAGE_VARIANT_BASIC} from '../../constants';
import {useParams} from 'react-router-dom';
import Shipment from "./Shipment";
import Payment from "./Payment";
import Finish from "./Finish";
import Header from "./Header";
import {ProductContext} from "../../contexts/ProductsProvider";
import {STEP_FINISH, STEP_PAYMENT, STEP_SHIPMENT} from "./constants";
import {CommitmentsContext} from "../../contexts/CommitmentsProvider";
import {v4} from "uuid";
import {UserContext} from "../../contexts/UserProvider";

const Checkout = () => {
  const [state, setState] = useState({
    currentStep: STEP_SHIPMENT,
  });
  const {productId} = useParams();
  const {getUserInfo} = useContext(UserContext);
  const {getProduct} = useContext(ProductContext);
  const {setCommitment} = useContext(CommitmentsContext);
  const product = getProduct(productId);

  const setShipment = (shipmentShape) => {
    setState({
      ...state, ...{
        currentStep: STEP_PAYMENT,
        shipment: shipmentShape,
      }
    });
  }

  const setPayment = (payment) => {
    setState({
      ...state, ...{
        currentStep: STEP_FINISH,
        payment: payment,
      }
    });

    setCommitment({
      id: v4(),
      product: productId,
      createdBy: getUserInfo().id,
      shippingAddress: state.shipment,
      paymentMethod: state.payment,
      status: 'in progress',
    });
  }

  const renderStep = (currentStep) => {
    if (currentStep === STEP_SHIPMENT) {
      return (
        <Shipment
          product={product}
          setShipment={(shipmentShape) => setShipment(shipmentShape)}
        />
      );
    } else if (currentStep === STEP_PAYMENT) {
      return (
        <Payment
          product={product}
          setPayment={(payment) => setPayment(payment)}
        />
      );
    } else if (currentStep === STEP_FINISH) {
      return (
        <Finish product={product} />
      );
    }
  }


  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={PAGE_TRANSITION}
      variants={PAGE_VARIANT_BASIC}>

      <Header currentStep={state.currentStep}/>

      <Layout classNamePage="checkoutPage">
        {renderStep(state.currentStep)}
      </Layout>
    </motion.div>
  );
};

export default Checkout;
