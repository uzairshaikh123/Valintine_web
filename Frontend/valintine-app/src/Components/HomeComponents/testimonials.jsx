import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './testimonial.css'
import { Link } from 'react-router-dom';

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
    <div>
    <Link>
        <img className='slider' src="https://valentinesagaassets.s3.ap-south-1.amazonaws.com/t1.png" alt="" />
    </Link>
    </div>
   
   <div>
   <Link >
     <img className='slider' src="https://valentinesagaassets.s3.ap-south-1.amazonaws.com/t2.png" alt="" />
    </Link>

   </div>
   
<div>
<Link >  
<img className='slider' src="https://valentinesagaassets.s3.ap-south-1.amazonaws.com/t3.png" alt="" />
</Link>
</div>
<Link>
        <img className='slider' src="https://valentinesagaassets.s3.ap-south-1.amazonaws.com/t4.png" alt="" />
</Link>
<Link>
        <img className='slider' src="https://valentinesagaassets.s3.ap-south-1.amazonaws.com/t5.png" alt="" />
</Link>

  </Carousel>
  </>
  )
}

export default Testimonials