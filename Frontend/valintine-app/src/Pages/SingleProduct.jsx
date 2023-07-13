import React from 'react';
import '../Styles/singleproduct.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SingleProductPage = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1124 },
      items: 3,
      slidesToSlide: 1 ,
      // optional, default to 1.
    },
    desktop2: {
      breakpoint: { max: 1650, min: 1480 },
      items: 3,
      slidesToSlide: 1 ,
      // optional, default to 1.
    },
    desktop3: {
      breakpoint: { max: 1480, min: 1194 },
      items: 3,
      slidesToSlide: 1 ,
      // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1194, min: 864 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mid_tablet: {
      breakpoint: { max: 750, min: 460 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 660, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const product = {
    title: 'Aesthetic Outdoor Dining (Per Couple)',
    image:"https://valentinesaga.com/wp-content/uploads/2023/03/Pink-Marvel-Gerbera-Blossoms-Bouquet4.2.jpg",
    related_images: ['https://valentinesaga.com/wp-content/uploads/2023/03/Pink-Marvel-Gerbera-Blossoms-Bouquet4.2.jpg',"https://valentinesaga.com/wp-content/uploads/2023/03/Pink-Marvel-Gerbera-Blossoms-Bouquet4.2.jpg", 'https://valentinesaga.com/wp-content/uploads/2023/03/White-Color-Roses-Orchids-Arrangement4.2.jpg', 'https://valentinesaga.com/wp-content/uploads/2023/03/Magic-Of-Love-Floral-Arrangement3.2.jpg'],
    price: '5,999.00',
    description: 'This is a detailed description of the product.',
    specifications: [
      { label: 'Decorated table with candles and rose petals', value: 'Value 1' },
      { label: 'Decorated table with candles and rose petals', value: 'Value 2' },
      { label: 'Decorated table with candles and rose petals', value: 'Value 3' },
      { label: 'Ambient Music. Inclusive of all taxes.', value: 'Value 3' }
    ],
    highlights: ['It’s a Non Private Event.', 'Check availability before booking.', 'Fish, prawns, and platters are not included in the package.']
  };


  return (
    <div className="product-page">
      <div className="product-images">
        <div className="main-image">
          <img className="zoom-effect" src={product.image} alt="Product" />
        </div>
        <div className="related-images">

        <Carousel
    swipeable={false}
    draggable={false}
    // showDots={true}
    // customRightArrow={<CustomRightArrow />}
    responsive={responsive}
    // autoPlay={true}
    infinite={true}
    // centerMode={true}
    autoPlaySpeed={1000}
    containerClass="carousel-container"
    >
      <div>

      <img src="https://valentinesaga.com/wp-content/uploads/2023/03/Pink-Marvel-Gerbera-Blossoms-Bouquet4.2.jpg" alt="" />
      </div>
      <div>

<img src="https://valentinesaga.com/wp-content/uploads/2023/03/Pink-Marvel-Gerbera-Blossoms-Bouquet4.2.jpg" alt="" />
</div>
<div>

<img src="https://valentinesaga.com/wp-content/uploads/2023/03/Pink-Marvel-Gerbera-Blossoms-Bouquet4.2.jpg" alt="" />
</div>

      </Carousel>
      </div>
        <div className="related-images">
       
          {product.related_images.slice(1).map((image, index) => (
            <img src={image} />
          ))}
        </div>
      </div>
      <div className="product-details">
        <h1 className="product-title">{product.title}</h1>
        <div className="product-price">₹{product.price}</div>
        <p className="product-description">{product.description}</p>
        <table className="product-specifications"  style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',height:"auto",padding:"25px",lineHeight:"30px"}}>
            <h2 style={{textAlign:"start",marginBottom:"20px"}}>Product Details</h2>
          <tbody>
            {product.specifications.map((spec, index) => (
              <tr key={index}>
                <td>{spec.label}</td>
                {/* <td>{spec.value}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="product-highlights" style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',height:"auto",padding:"25px",lineHeight:"30px"}}>
          <h2 style={{textAlign:"start",marginBottom:"20px"}}>Product Highlights:</h2>
          <ul>
            {product.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
        <div style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',height:"auto",padding:"25px",marginTop:"50px"}}>
<h2 style={{textAlign:"start",marginBottom:"5px"}}>Cancelation Policy</h2>
        <ul>
          <li style={{textAlign:"start",marginBottom:"10px"}}>Refunds for experiences to be availed in the next 72 hours will be done only in ValentineSaga Wallet.</li>
          <li style={{textAlign:"start",marginBottom:"10px"}}>Less than 24 hours before an experience: Cancellation with NO Refund. 24 hours to 2 days before an experience: Cancellation with 95% Refund in ValentineSaga Wallet.</li>
          <li style={{textAlign:"start",marginBottom:"10px"}}>No Cancellation for Digital experiences. Refund will be in ValentineSaga Wallet only.</li>
          <li style={{textAlign:"start",marginBottom:"10px"}}>2 days or more before an experience: Cancellation with 100% Refund in ValentineSaga Wallet.</li>
          <li style={{textAlign:"start",marginBottom:"10px"}}>In case of a Rain/Hailstorm or Any other act of God, Only Reschedule will be entertained and No Cancellation will be done.</li>
          <li style={{textAlign:"start",marginBottom:"10px"}}>96% Refund in the original payment method if canceled within 72 hours of the booking, except for Romantic Stay packages where 40% of the money will be refunded in the original payment method.</li>
        </ul>

        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
