import React from 'react';
import {object, string} from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import {calculateCommitmentPrice} from "../../utils/calculateCommitmentPrice";
import Product from "../../components/checkout/Product";

export const schema = object().shape({
  recipientName: string().required(),
  address: string().required(),
  zipCode: string().required(),
  country: string().required(),
  city: string().required(),
});

const Shipment = (props) => {
  const { register, handleSubmit } = useForm({
    shouldFocusError: true,
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = ({
    recipientName,
    address,
    zipCode,
    country,
    city,
  }) => {
    const shipmentShape = {
      recipientName,
      address,
      zipCode,
      country,
      city,
    };
    props.setShipment(shipmentShape);
  };

  return (
    <section className='pageContent'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='pageBody'>
          <Input
            reference={register}
            label='Recipient Name'
            name='recipientName'
            placeholder='e.g. John Doe'/>

          <Input
            reference={register}
            label='Address'
            name='address'
            placeholder='e.g. 3rd Street, 124'/>

          <Input
            reference={register}
            label='Zip Code'
            name='zipCode'
            placeholder='11111'/>

          <Input
            reference={register}
            label='Country'
            name='country'
            placeholder='e.g. USA'/>

          <Input
            reference={register}
            label='City'
            name='city'
            placeholder='e.g. New York'/>
        </div>

        <div className='formFooter'>
          <Product product={props.product} />
          <hr/>
          <p className='paymentAmount'>
            <span className='label'>Prepayment</span>
            <span className='value'>
              {calculateCommitmentPrice(props.product.sellingPrice)}
            </span>
          </p>
          <div className="actionWrapper">
            <button className="submitBtn" type="submit">
                Continue
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Shipment;