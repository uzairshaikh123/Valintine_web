import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './slider.css'
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
    containerClass="carousel-container"
    >
    
        <img className='slider' src="https://deowgxgt4vwfe.cloudfront.net/uploads/1654858992_original.jpg" alt="" />
   
   
        <img className='slider' src="	https://deowgxgt4vwfe.cloudfront.net/uploads/1654858992_original.jpg" alt="" />

         <img className='slider' src="https://deowgxgt4vwfe.cloudfront.net/uploads/1654858992_original.jpg" alt="" />

        <img className='slider' src="https://deowgxgt4vwfe.cloudfront.net/uploads/1654858992_original.jpg" alt="" />

  </Carousel>
  )
}

export default Slider