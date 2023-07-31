import React from 'react'
import './services.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Services = () => {
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
  return (
    <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    autoPlay={true}
    infinite={true}
    containerClass="carousel-container"
    >

        
   
    <div className='service-cont1'>
        <img id='service-img1' src="https://valentinesaga.com/wp-content/uploads/2023/03/istockphoto-1354206303-612x612-removebg-preview.png" alt="" />
        <p>FREE SHIPPING ON ALL ORDERS</p>
        <p style={{height:"auto"}}>Get Free Shipping on all orders over 999/-. Items are dispatched from Delhi and will arrive in 2-5 days deepening on distance.</p>
    </div>
    <div className='service-cont2'>
        <img id='service-img2' src="https://valentinesaga.com/wp-content/uploads/2023/03/1256652-removebg-preview-1.png" alt="" />
        <p>AMAZING CUSTOMER SERVICE</p>
        <p style={{height:"auto"}}>The Valentine’s Saga, on the other hand, is all about celebrating love in your own unique ,without regard for customs or traditions.</p>
    </div>
    
    </Carousel>
    
  )
}

export default Services






