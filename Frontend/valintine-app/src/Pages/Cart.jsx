import React, { useState } from 'react';
import '../Styles/cart.css';
import { Link } from 'react-router-dom';
import Links from '../Components/HomeComponents/Links';

function Cart() {
  const [items, setItems] = useState([
    { id: 1,desc:"Something", name: 'Item 1', quantity: 1, price: 10,img:"https://valentinesaga.com/wp-content/uploads/2023/03/White-Color-Roses-Orchids-Arrangement2.2.jpg" },
    { id: 2,desc:"Something", name: 'Item 2', quantity: 2, price: 15,img:"https://valentinesaga.com/wp-content/uploads/2023/03/White-Color-Roses-Orchids-Arrangement2.2.jpg" },
    { id: 3,desc:"Something", name: 'Item 3', quantity: 3, price: 20,img:"https://valentinesaga.com/wp-content/uploads/2023/03/White-Color-Roses-Orchids-Arrangement2.2.jpg" },
    { id: 4,desc:"Something", name: 'Item 3', quantity: 3, price: 20,img:"https://valentinesaga.com/wp-content/uploads/2023/03/White-Color-Roses-Orchids-Arrangement2.2.jpg" },
  ]);

  const removeItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  const increaseQuantity = (itemId) => {
    setItems(items.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    }));
  };

  const decreaseQuantity = (itemId) => {
    setItems(items.map(item => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }));
  };

  const getTotalCost = () => {
    return items.reduce((total, item) => total + (item.quantity * item.price), 0);
  };

  return (
    <>
    <div style={{background:"pink"}}>
      <h2 style={{borderBottom:"2px solid white",display:"inline"}}>Cart</h2>
    <div className="cart">
      <div style={{  height: "400px",overflowY:"auto"}}>
      {items.map(item => (
        <div className="cart-item" key={item.id}>
          <div style={{display:"flex",gap:"50px"}}>
            <img style={{height:"25%",width:"25%"}} src={item.img} alt="" />
            <div style={{marginTop:"15px"}}>
            <h3>{item.name}</h3>
             <h4>{item.desc}</h4>
            </div>
          </div>
          <div className="quantity" style={{}}>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
          </div>
          <button className='remove' onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
          </div>
      <div className="checkout">
        <h3>Checkout</h3>
        <div style={{display:"flex",justifyContent:"space-between",width:"50%",margin:"auto",borderBottom:"2px solid gray",marginBottom:"10px"}}>
        <p>SubTotal: </p>
        <p>₹ {getTotalCost()}</p>

        </div>
        <div style={{display:"flex",justifyContent:"space-between",width:"50%",margin:"auto",borderBottom:"2px solid gray",marginBottom:"10px"}}>
        <p>Total: </p>
        <p>₹ {getTotalCost()}</p>

        </div>

        <Link to="/checkout" style={{textDecoration:"none"}}>
        <button>
          Proceed to Checkout
          </button>
    </Link>
<div className='apply-cont' style={{width:"50%",margin:"auto",marginBottom:"50px",marginTop:"50px"}}>
  <p>Coupon Code</p>
  <input  type="text" placeholder='Enter your coupon code' />
  <button className='apply-button' style={{marginTop:"20px"}}>Apply Coupon</button>
</div>


    
      </div>
    </div>
    </div>
    <Links/>
    </>
  );
}

export default Cart;
