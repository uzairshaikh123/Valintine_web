import React from 'react';
import '../Styles/singleproduct.css';

const SingleProductPage = () => {
  const product = {
    title: 'Aesthetic Outdoor Dining (Per Couple)',
    images: ['https://valentinesaga.com/wp-content/uploads/2023/03/Pink-Marvel-Gerbera-Blossoms-Bouquet4.2.jpg', 'https://valentinesaga.com/wp-content/uploads/2023/03/White-Color-Roses-Orchids-Arrangement4.2.jpg', 'https://valentinesaga.com/wp-content/uploads/2023/03/Magic-Of-Love-Floral-Arrangement3.2.jpg'],
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
          <img className="zoom-effect" src={product.images[0]} alt="Product" />
        </div>
        <div className="related-images">
          {product.images.slice(1).map((image, index) => (
            <img  key={index} src={image} alt={`Related Image ${index + 1}`} />
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
        <div style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',height:"auto",padding:"25px",lineHeight:"30px",marginTop:"50px"}}>
<h2 style={{textAlign:"start",marginBottom:"20px"}}>Cancelation Policy</h2>
        <ul>
          <li>Refunds for experiences to be availed in the next 72 hours will be done only in ValentineSaga Wallet.</li>
          <li>Less than 24 hours before an experience: Cancellation with NO Refund. 24 hours to 2 days before an experience: Cancellation with 95% Refund in ValentineSaga Wallet.</li>
          <li>No Cancellation for Digital experiences. Refund will be in ValentineSaga Wallet only.</li>
          <li>2 days or more before an experience: Cancellation with 100% Refund in ValentineSaga Wallet.</li>
          <li>In case of a Rain/Hailstorm or Any other act of God, Only Reschedule will be entertained and No Cancellation will be done. Perishable item(s) will not be refunded/canceled/rescheduled.</li>
          <li>96% Refund in the original payment method if canceled within 72 hours of the booking, except for Romantic Stay packages where 40% of the money will be refunded in the original payment method.</li>
        </ul>

        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
