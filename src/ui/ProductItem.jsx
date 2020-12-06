import React from "react"

export const ProductItem = ({ product, isSelling }) => {
  const { title, status, sellingDate, sellingPrice, buyingPrice, description, img } = product;
  return (
    <div className='productItem'>
      <div className="shortInfo">
        <img src={ img } alt="" />
        <div>
          <h3>{ title }</h3>
          <div className="shortInfoItem">
            <span className="subTitle">Buying/Selling Price</span><span className="value">{ sellingPrice }/{ buyingPrice }</span>
          </div>
          <div className="shortInfoItem">
            <span className="subTitle">Selling Date</span><span className="value">{ sellingDate }</span>
          </div>
          <div className="shortInfoItem">
            <span className="subTitle"><span className={status.toLowerCase() === "active" ? "statusIndicatorActive": "statusIndicatorInActive"} /> Status</span><span className="value">{ status }</span>
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
        <button>Cancel</button>
      </div> }
    </div>
  )
}