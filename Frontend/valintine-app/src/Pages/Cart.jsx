import React, { useEffect, useState } from "react";
import "../Styles/cart.css";
import { Link } from "react-router-dom";
import Links from "../Components/HomeComponents/Links";
import { useDispatch, useSelector } from "react-redux";
import {
  handle_delete_cartproducts,
  handlecartquantity,
  handlegetcartproducts,
} from "../Redux/action";
import { toast } from "react-toastify";

function Cart() {
  const user = JSON.parse(sessionStorage.getItem("userdetails"));
  const dispatch = useDispatch();
  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem("userdetails"));
    dispatch(handlegetcartproducts(user?._id));
  }, []);
  const store = useSelector((store) => store);
  const { loading, cart, error } = store;

  // console.log(cart)

  const handleremove_product_from_cart = (id) => {
    dispatch(handle_delete_cartproducts(id)).then((res) => {
      if (res?.status === 200 || res.status === 201) {
        toast.success("Product Deleted", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        dispatch(handlegetcartproducts(user._id));
      } else {
        toast.error("Product Not delete", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    });
  };

  const increaseQuantity = (itemId, qty) => {
    const obj = {
      quantity: qty + 1,
    };

    // console.log(qty,itemId)
    dispatch(handlecartquantity(itemId, obj)).then((res) => {
      if (res.status === 200 || res.status === 201) {
        dispatch(handlegetcartproducts(user._id));
        // alert("qty")
      }
    });
  };

  const decreaseQuantity = (itemId, qty) => {
    const obj = {
      quantity: qty - 1,
    };

    if (qty === 1) {
      dispatch(handle_delete_cartproducts(itemId)).then((res) => {
        if (res.status === 200 || res.status === 201) {
          dispatch(handlegetcartproducts(user._id));
          toast.success("Product Removed", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
    }

    console.log(qty, itemId);
    dispatch(handlecartquantity(itemId, obj)).then((res) => {
      if (res.status === 200 || res.status === 201) {
        dispatch(handlegetcartproducts(user?._id));
        // alert("qty")
      }
    });
  };

  const getTotalCost = () => {
    console.log(cart)

  //  let multiple_price_cart = cart.filter((el)=>{

  //     return el.multiple_price.length
  //  })
   let total = cart.reduce((acc,el)=>{
if(el.multiple_price.length>0){

  console.log("el",el.multiple_price)
  for(let i=0;i<el.multiple_price.length;i++){
    let w=+el.weight
   if(w==el.multiple_price[i].weight){
      acc+=el.multiple_price[i].price*el.quantity
   }
  }

}else{
  acc += el.quantity * Number(el.price)
}
return acc
      
   },0)
   console.log(total)
   sessionStorage.setItem("total_price",JSON.stringify(total))
   return total
  
    // return cart?.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
   cart?.length>0?<>
      <div style={{ background: "#f7f9fc" }}>
        <h2 style={{ borderBottom: "2px solid white", display: "inline" }}>
          Cart
        </h2>
        <div className="cart">
          <div style={{ height: "400px", overflowY: "auto" }}>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div style={{ display: "flex", gap: "50px" }}>
                  <img
                    style={{ height: "25%", width: "25%" }}
                    src={item.image[0]}
                    alt=""
                  />
                  <div style={{ marginTop: "15px" }}>
                    <h3 style={{ maxWidth: "100%", minWidth: "100%" }}>
                      {" "}
                      {item.name}
                    </h3>
                    <p>{item.multiple_price.length?item.price:`₹${item.price}`}</p>
                  </div>
                </div>
                <div className="quantity" style={{}}>
                  <button
                    style={{
                      borderRadius: "50%",
                      display: "inline",
                      backgroundColor: "#ce93d8",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      decreaseQuantity(item?.productID, item.quantity)
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    style={{
                      borderRadius: "50%",
                      display: "inline",
                      backgroundColor: "#ce93d8",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      increaseQuantity(item?.productID, item.quantity)
                    }
                  >
                    +
                  </button>
                </div>
                <div
                  className="remove"
                  onClick={() => handleremove_product_from_cart(item.productID)}
                >
                  <img
                    style={{ height: "15%", width: "15%", cursor: "pointer" }}
                    src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="checkout">
            <h3>Checkout</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
                margin: "auto",
                borderBottom: "2px solid gray",
                marginBottom: "10px",
              }}
            >
              <p>SubTotal: </p>
              <p>₹ {getTotalCost()}</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
                margin: "auto",
                borderBottom: "2px solid gray",
                marginBottom: "10px",
              }}
            >
              <p>Total: </p>
              <p>₹ {getTotalCost()}</p>
            </div>

            <Link to="/checkout" style={{ textDecoration: "none" }}>
              <button style={{ padding: "10px", cursor: "pointer" }}>
                Proceed to Checkout
              </button>
            </Link>
            <div
              className="apply-cont"
              style={{
                width: "50%",
                margin: "auto",
                marginBottom: "50px",
                marginTop: "50px",
              }}
            >
              <p>Coupon Code</p>
              <input type="text" placeholder="Enter your coupon code" />
              <button
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  marginTop: "20px",
                }}
                className="apply-button"
              >
                Apply Coupon
              </button>
            </div>
          </div>
        </div>
      </div>
      <Links />
    </>:<div style={{width:"50%",margin:"auto"}}>
      <img width={"80%"} style={{marginTop:"50px",height:"100%"}} src="https://www.clickbazar.com/Images/empty-cart.gif" alt="" />
    </div>
  );
}

export default Cart;
