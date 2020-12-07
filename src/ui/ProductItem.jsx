import React, { useContext } from "react"

import { ProductContext } from '../contexts/ProductsProvider.jsx'
import {getSellingDate} from "../utils/getSellingDate";
import {CommitmentsContext} from "../contexts/CommitmentsProvider";

export const ProductItem = ({ product, isSelling }) => {
  const { title, status, sellingPrice, buyingPrice, description, images, id } = product;
  const { deleteProduct } = useContext(ProductContext);
  const { deleteCommitmentsByProductId } = useContext(CommitmentsContext);

  const deleteSelling = (id) => {
    deleteProduct(id);
    deleteCommitmentsByProductId(id);
  };

  return (
    <div className='productItem'>
      <div className="shortInfo">
        <img src={ images[0] } alt="" />
        <div>
          <h3>{ title }</h3>
          <div className="shortInfoItem">
            <span className="subTitle">Buying/Selling Price</span><span className="value">${ sellingPrice }/${ buyingPrice }</span>
          </div>
          <div className="shortInfoItem">
            <span className="subTitle">Selling Date</span><span className="value">{getSellingDate(product)}</span>
          </div>
          <div className="shortInfoItem">
            <span className="subTitle"><span className={ status.toLowerCase() === "active" ? "statusIndicatorActive" : "statusIndicatorInActive" } /> Status</span><span className="value">{ status }</span>
          </div>
        </div>
      </div>
      <div className="description">
        <h3>Description</h3>
        <article>
          { description }
        </article>
      </div>
      {isSelling && <div className="sellingControls">
        <button>Edit</button>
        <button onClick={() => deleteSelling(id)}>Cancel</button>
      </div> }
    </div>
  )
}