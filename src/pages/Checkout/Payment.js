import React from 'react';
import {object, string} from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {v4} from "uuid";
import Input from "../../components/Input";
import Product from "../../components/checkout/Product";
import {calculateCommitmentPrice} from "../../utils/calculateCommitmentPrice";

export const schema = object().shape({
  cardNumber: string().required(),
  holderName: string().required(),
  cvv: string().required(),
  expire: string().required(),
});

const Payment = (props) => {
  const { register, handleSubmit } = useForm({
    shouldFocusError: true,
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    const payment = {
      type: 'card',
      source: v4(),
    };
    props.setPayment(payment);
  };
  const payByApplePay = () => {
    props.setPayment({
      type: 'pay',
      source: v4(),
    });
  };
  const payByPalPay = () => {
    props.setPayment({
      type: 'palPay',
      source: v4(),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className='card'>
        <div className='inputsRow'>
          <Input
          reference={register}
          name='cardNumber'
          placeholder='0000 0000 0000 0000'/>

          <Input
          reference={register}
          name='expire'
          placeholder='MM/YYYY'/>
        </div>
        <div className='inputsRow'>
          <Input
          reference={register}
          name='holderName'
          placeholder='Holder Name'/>

          <Input
          reference={register}
          name='cvv'
          placeholder='CVV2'/>
        </div>
      </fieldset>

      <p className='or'>OR</p>

      <button className='paymentMethodButton' onClick={() => payByApplePay()}>
        <span className='ApplyPay' /> Pay
      </button>

      <button className='paymentMethodButton' onClick={() => payByPalPay()}>
        <span className='PayPal' /> PayPal
      </button>

      <div className='formFooter'>
        <Product product={props.product} />
        <hr/>
        <p className='paymentAmount'>{calculateCommitmentPrice(props.product.sellingPrice)}</p>
        <button className="submitBtn" type="submit">
            Continue
        </button>
      </div>
    </form>
  );
};

export default Payment;