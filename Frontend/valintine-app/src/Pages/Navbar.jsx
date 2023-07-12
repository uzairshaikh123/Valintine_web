import React, { useState } from 'react';
import '../Styles/navbar.css'
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { pink } from '@mui/material/colors';
import BasicModal from '../Components/HomeComponents/Modal';
import TemporaryDrawer from '../Components/HomeComponents/DrawerComp';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
function Navbar() {
  
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    // right: -3,
    // top: 13,
    // border: `2px solid ${theme.palette.background.paper}`,
    // padding: '0 4px',
  },
}));

const dispatch =useDispatch()
  const color = pink[500];
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, close] = useState(true)
const navigate = useNavigate()
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
const handlelogout =()=>{
  let t =sessionStorage.setItem('token',"")
  console.log("t",t)
  dispatch({type: 'logout'})

  return navigate("/login")
}

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to={"/"}>
        <img className='logo' id={"comp-logo"} src="https://valentinesaga.com/wp-content/uploads/2023/07/ValentineSaga-Logo-4-min.png" alt="" />
        </Link>
        <div id='search-cont' >

      <input type="text" className="navbar-search" placeholder="what you want to search" />
     <img  id='glass' src="https://img.icons8.com/?size=512&id=132&format=png" alt="" />
        </div>
        <div id='search-mob'>
<input type="text" className='search-mob-input' placeholder='what you want to search' />
<button>
  <img id='glass' src="https://img.icons8.com/?size=512&id=132&format=png" alt="" />
</button>
        </div>
      </div>
      <div className="navbar-options">
       
          <Link to={"/login"}>
         <a href="#" className="login-nav location">Login</a>
          </Link>
  
         <Link to={"/cart"}>
         <a href="#" className="cart-nav location">
         <IconButton aria-label="cart" style={{display:"flex",width:"35px",justifyContent:"center",alignItems:"center"}}>
  <StyledBadge badgeContent={1} color="secondary">
    <ShoppingCartIcon />
  </StyledBadge>
</IconButton>
         </a>
         </Link>
    
       {/* <button  backgroundColor={color}> */}
      

        
          <BasicModal  name={"Location"}/>
        
          <img style={{height:"6%",width:"6%",cursor:"pointer"}} onClick={handlelogout} src="https://img.icons8.com/?size=512&id=j8vtslxN0LJo&format=png" alt="" />
       

      
        {/* </button> */}
      </div>
      <div className="navbar-menu-icon" onClick={toggleMenu}>
      <TemporaryDrawer/>

      </div>
    </div>
  );
}

export default Navbar;





