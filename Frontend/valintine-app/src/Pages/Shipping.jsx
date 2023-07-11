import React from 'react';
// import './AddressPage.css';
import '../Styles/shipping.css'
function AddressPage() {
  return (
    <div className="address-container">
      <h2>Address Information</h2>
      <form action="">
        <div>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder='Enter Your Name' />
        </div>
     <div>

         <label htmlFor="street">Street</label>
        <input type="text" id="street" placeholder='Enter Your Street' />
     </div>
    
      <div>
        <label htmlFor="city">City</label>
        <input type="text" id="city" placeholder='Enter Your City' />
      </div>
      <div>
        <label htmlFor="state">State</label>
        <input type="text" id="state" placeholder='Enter Your State' />
      </div>
      <div>
        <label htmlFor="postalCode">Postal Code</label>
        <input type="text" id="postalCode" placeholder='Enter Your Postal Code' />
      </div>
      <button className='saveadd'>Save Address</button>
      </form>
    </div>
  );
}

export default AddressPage;
