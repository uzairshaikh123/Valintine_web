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
function Navbar({ cartcount }) {
 

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
    console.log("t", t);
    dispatch({ type: "logout" });
    // dispatch(handlegetcartproducts(user?._id))
    window.location.reload();
    return navigate("/login");
  };

  useEffect(() => {

    setitems(cart?.length);
  }, [cart]);
  console.log(cartcount);
  return (
    <div className="navbar">
       <div className="navbar-menu-icon" onClick={toggleMenu}>
        <TemporaryDrawer />
      </div>
      <div className="navbar-logo">
        <Link to={"/"}>
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
            <IconButton
              aria-label="cart"
              style={{
                display: "flex",
                width: "35px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <StyledBadge
                badgeContent={cartcount || cart?.length}
                color="secondary"
              > */}
                {/* <ShoppingCartIcon /> */}
              {/* </StyledBadge> */}
            </IconButton>
          </a>
        </Link>

        {/* <button  backgroundColor={color}> */}
       

        {/* </button> */}
          
      </div>
          {<BasicModal name={"Location"} />}
          <div className="user">
      <Button
        id="basic-button"
        aria-controls={open2 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        user
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open2}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>
        <Link to={"/orders"}>
        
          My Orders
        </Link>
          
          </MenuItem>
        <MenuItem onClick={handleClose}>
        {token && (
          <p
      
          onClick={handlelogout}
          >Logout</p>
          )}
        </MenuItem>
      </Menu>
    </div>
      {/* <div className="navbar-menu-icon" onClick={toggleMenu}>
        <TemporaryDrawer />
      </div> */}
    </div>
  );
}

export default Navbar;





