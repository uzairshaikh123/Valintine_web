import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};



  return ( 
  <>
<h1 style={{marginBottom:"30px",marginTop:"30px"}}>Customer Testimonials</h1>
  <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    autoPlay={true}
    containerClass="carousel-container"
    infinite={true}
    >
    
        <img src="https://deowgxgt4vwfe.cloudfront.net/uploads/1654858992_original.jpg" alt="" />
   
   
        <img src="	https://deowgxgt4vwfe.cloudfront.net/uploads/1654858992_original.jpg" alt="" />

         <img src="https://deowgxgt4vwfe.cloudfront.net/uploads/1654858992_original.jpg" alt="" />

        <img src="https://deowgxgt4vwfe.cloudfront.net/uploads/1654858992_original.jpg" alt="" />

  </Carousel>
  </>
  )
}

export default Testimonials