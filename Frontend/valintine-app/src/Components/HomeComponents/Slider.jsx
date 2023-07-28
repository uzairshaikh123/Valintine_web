import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './slider.css'
import candle from './candlelight.jpg'
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
         <div>

        <img   className='slider' src={"https://mail.google.com/mail/u/0?ui=2&ik=759b7688c9&attid=0.1&permmsgid=msg-f:1772655469591901462&th=1899bcc1f62db516&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-3a7OCoZfDZtBe5RXNooHQZhxvhtQM-U9ZyPdCjooSUtAtHzRDvZZ05aV3J9oHyhQ9eEDnI6dY1ZY3N2Gs-1l9_RFIzHgBHEqvnJx9Tg6-fhAWEs_9YrxyxFo&disp=emb&realattid=ii_lkmdgykj1"} alt="" />
         </div>
   
   <div>
        <img  className='slider' src="https://mail.google.com/mail/u/0?ui=2&ik=759b7688c9&attid=0.1&permmsgid=msg-f:1772655469591901462&th=1899bcc1f62db516&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-3a7OCoZfDZtBe5RXNooHQZhxvhtQM-U9ZyPdCjooSUtAtHzRDvZZ05aV3J9oHyhQ9eEDnI6dY1ZY3N2Gs-1l9_RFIzHgBHEqvnJx9Tg6-fhAWEs_9YrxyxFo&disp=emb&realattid=ii_lkmdgykj1" alt="" />
   </div>
   <div>
          <img  className='slider' src="https://mail.google.com/mail/u/0?ui=2&ik=759b7688c9&attid=0.3&permmsgid=msg-f:1772655469591901462&th=1899bcc1f62db516&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9wjwoO4Q4WAWEfn3zYV8qxspscMG23S_GrcwjP-eMrsDu6s4fsAszJO0lsrGbbUkEHz4F1sQrweDl270hRQ5xeGQV-jUIzvx-9rgaftLAwoyrmHnVA1XUmI4Y&disp=emb&realattid=ii_lkmdgyko2" alt="" />
   </div>

<div>

        <img  className='slider' src={"https://mail.google.com/mail/u/0?ui=2&ik=759b7688c9&attid=0.1&permmsgid=msg-f:1772655469591901462&th=1899bcc1f62db516&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-3a7OCoZfDZtBe5RXNooHQZhxvhtQM-U9ZyPdCjooSUtAtHzRDvZZ05aV3J9oHyhQ9eEDnI6dY1ZY3N2Gs-1l9_RFIzHgBHEqvnJx9Tg6-fhAWEs_9YrxyxFo&disp=emb&realattid=ii_lkmdgykj1"} alt="" />
</div>

  </Carousel>
  )
}

export default Slider