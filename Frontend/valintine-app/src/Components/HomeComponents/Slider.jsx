import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './slider.css'

// import candle from './candlelight.jpg'
import { Link } from 'react-router-dom';
const Slider = () => {
  
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1384, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};



  return ( <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    autoPlay={true}
    infinite={true}
    containerClass="carousel-container carousel-container-2"
    // containerClass="carousel-container"
    >
       
   
   
   <div  className='slider-container'>
       <Link to={'products?category=candle_light'}>
        <img   className='slider' src={"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Slider_images/candle.jpg"} alt="" />
       </Link>
         </div>
   
   <div className='slider-container'>
   <Link to={'products?category=decorations'}>
        <img  className='slider' src="https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Slider_images/baloon.jpg" alt="" />
   </Link>
   </div>
   <div className='slider-container'>
   <Link to={'products?category=decorations'}>
          <img  className='slider' src="https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Slider_images/unnamed.jpg" alt="" />
   </Link>
   </div>

<div className='slider-container'>
<Link to={'products?category=decorations'}>
        <img  className='slider' src={"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Slider_images/birthday.jpg"} alt="" />
</Link>
</div>

<div className='slider-container'>
<Link to={'products?category=decorations'}>
        <img  className='slider' src={"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/bt.jpg"} alt="" />
</Link>
</div>
<div className='slider-container'>
<Link to={'products?category=decorations'}>
        <img  className='slider' src={"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/CANDEL-LIGHT-DINNER2.jpg"} alt="" />
</Link>
</div>

  </Carousel>
  )
}

export default Slider