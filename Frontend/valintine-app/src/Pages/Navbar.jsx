import React, { useEffect, useState } from "react";
import "../Styles/navbar.css";
import { Link } from "react-router-dom";
import BasicModal from "../Components/HomeComponents/Modal";
import TemporaryDrawer from "../Components/HomeComponents/DrawerComp";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handlegetcartproducts } from "../Redux/action";
import logo from './logo3.png'
import { Button, IconButton, Menu, MenuItem } from "@chakra-ui/react";
import {HiShoppingCart} from 'react-icons/hi'
import { useSearchParams } from "react-router-dom";

function Navbar({ cartcount }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCity = sessionStorage.getItem("cityname")
  // const initialCity=searchParams.get("city")
  const store = useSelector((store) => store);
  const { token, cart } = store;
  const dispatch = useDispatch();
  // const color = pink[500];
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, close] = useState(true);
  const navigate = useNavigate();
  const [items, setitems] = useState(cart.length);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open2 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlelogout = () => {
    let t = sessionStorage.setItem("token", "");
    // let user = JSON.parse(sessionStorage.getItem("userdetails"))
    // console.log("t", t);
    dispatch({ type: "logout" });
    // dispatch(handlegetcartproducts(user?._id))
    window.location.reload();
    return navigate("/login");
  };

  useEffect(() => {

    setitems(cart?.length);
    // setSearchParams({ city: initialCity }); // Use the city state variable
    setSearchParams({city:initialCity})
  }, [cart,initialCity]);
  // console.log(cartcount);
  return (
    <div className="navbar">
       <div className="navbar-menu-icon" onClick={toggleMenu}>
        <TemporaryDrawer />
      </div>
      <div className="navbar-logo">
        <Link to={`/?city=${initialCity}`}>
          <img
            className="logo"
            id={"comp-logo"}
            style={{width:"140px", height:"48px"}}
           src={"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/logo/logo3.png"}
            alt=""
          />
        </Link>
        {/* {menuOp/en===false && <BasicModal name={"Location"} />} */}
        <div id="search-cont">
          <input
            type="text"
            className="navbar-search"
            placeholder="what you want to search"
          />
          <img
            id="glass"
            src="https://img.icons8.com/?size=512&id=132&format=png"
            alt=""
          />
        </div>
        <div id="search-mob">
          <input
            type="text"
            className="search-mob-input"
            placeholder="what you want to search"
          />

          <img
            id="search-btn"
            src="https://img.icons8.com/?size=512&id=132&format=png"
            alt=""
          />
        </div>
      </div>
      <div className="navbar-options">
        {token === "" && (
          <Link to={"/login"}>
            <a href="#" className="login-nav location">
              Login
            </a>
          </Link>
        )}

        <Link to={"/cart"}>
          <a href="#" className="cart-nav location">
            
             <HiShoppingCart />
           
          </a>
        </Link>

        {/* <button  backgroundColor={color}> */}
       

        {/* </button> */}
          
      </div>
          {<BasicModal name={"Delhi"} />}
          <div className="user">
    
    </div>
      {/* <div className="navbar-menu-icon" onClick={toggleMenu}>
        <TemporaryDrawer />
      </div> */}
    </div>
  );
}

export default Navbar;





