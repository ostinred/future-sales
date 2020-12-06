import React, {useState} from 'react';
import BackButton from "../BackButton";
import _ from "lodash";
import Carousel from "nuka-carousel";
import shareImage from '../../images/share.png';
import addToWishListImage from '../../images/addToWishList.png';
import viewsCountImage from '../../images/viewsCount.png';
import {COMMITMENT_PERCENTS} from "../../settings";


const Header = ({product}) => {
  const productImages = _.map(product.images, (img, i) => ({
    id: i,
    img: img,
  }));
  const [state, setState] = useState({
    currentImageIndex: 0,
  });
  const setCurrentSlide = (index) => {
    setState({...state, ...{
      currentImageIndex: index,
    }});
  };



  return (
    <section className='productHeader'>
      <BackButton/>
      <button className="shareButton" type="button">
        <img src={shareImage} alt="Share"/>
      </button>
      <button className="addToWishListButton" type="button">
        <img src={addToWishListImage} alt="Add to wish list"/>
      </button>

      <Carousel
        className='imageCarousel'
        withoutControls={true}
        afterSlide={(slideIndex) => setCurrentSlide(slideIndex)}
      >
        {_.map(productImages, (o) => (
          <img key={o.id} src={o.img} alt={product.title}/>
        ))}
      </Carousel>
      <ul className='imagesControls'>
        {_.map(productImages, (o, i) => (
          <li key={o.id} className={state.currentImageIndex === i ? 'active': ''} />
        ))}
      </ul>
      <span className='viewsCount'>
        <img src={viewsCountImage} alt="Views count"/>
        {product.viewsCount}
      </span>
      <span className='discount'>-{COMMITMENT_PERCENTS}%</span>
    </section>
  );
};

export default Header;