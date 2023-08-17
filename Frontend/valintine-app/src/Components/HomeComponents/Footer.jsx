import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
      <div className="footer-section">
          <h3>
            <img style={{width:"80%",height:"100%"}} src="https://valentinesagaassets.s3.ap-south-1.amazonaws.com/logo/logo3.png" alt="" />
            <div>
            <span style={{fontWeight:500, fontSize:"15px"}}>
               Address :  METRO GATE NO 2, B 1,2&3, near DWARKA MOR, Sewak Park, Delhi, 110059
              </span> 
              <span>Email id : support@velentinesaga.com</span>
              <span>Mobile No : +91 91134 54217</span>
            </div>


            <Button bg={'blue'} color={"white"}><Link to="/contact" style={{textDecoration:"none",color:"white"}}>Contact Us</Link></Button>
            {/* <img style={{width:"80%",height:"100%"}} src="https://valentinesagaassets.s3.ap-south-1.amazonaws.com/ram.jpg" alt="" /> */}
          </h3>
          {/* <p>Let's Connect With Us</p> */}
          {/* <ul>
            <li>Github</li>
            <li>Whatsapp</li>
            <li>Linkidin</li>
          </ul> */}
        </div>
        <div className="footer-section">
          <h5 style={{fontWeight:600,color:"black",fontSize:"25px"}}>Connect With Us</h5>
                  
          <p><Link to="/" style={{textDecoration:"none",color:"black"}}>Home</Link></p>
          <p><Link to="/about" style={{textDecoration:"none",color:"black"}}>About us</Link></p>
          <p><Link to="/products" style={{textDecoration:"none",color:"black"}}>Shop</Link></p>
          <p><Link to="/blogs" style={{textDecoration:"none",color:"black"}}>Blog</Link></p>
          <p><Link to="/faq" style={{textDecoration:"none",color:"black"}}>Faq</Link></p>
          <p><Link to="/terms" style={{textDecoration:"none",color:"black"}}>Term And Conditions</Link></p>
          <p><Link to="/policy" style={{textDecoration:"none",color:"black"}}>Privacy Policy</Link></p>
         
         
        </div>
        <div className="footer-section">
          <h5 style={{fontWeight:600,color:"black",fontSize:"25px"}}>Conditions</h5>
          <p><Link to="https://www.facebook.com/Coupleservices" style={{textDecoration:"none",color:"black"}}>Facebook</Link></p>
          <p><Link to="https://www.instagram.com/valentine.saga/" style={{textDecoration:"none",color:"black"}}>Instagram</Link></p>
          <p><Link to="https://www.youtube.com/@ValentineSaga" style={{textDecoration:"none",color:"black"}}>Youtube</Link></p>
          <p><Link to="https://twitter.com/RaviJha63438448" style={{textDecoration:"none",color:"black"}}>Twitter</Link></p>
          <p><Link to="support@valantinesaga.com" style={{textDecoration:"none",color:"black"}}>Email</Link></p>
          <p><Link to="https://in.pinterest.com/rpj0597saga" style={{textDecoration:"none",color:"black"}}>Pinterest</Link></p>
          <p><Link to="https://www.linkedin.com/in/valentine-saga-00252126a/" style={{textDecoration:"none",color:"black"}}>Linkidin</Link></p>
        </div>
        <div className="footer-section footer-section-last">
          <h5>Subscribe</h5>
          <p>Get updates and exclusive offers!</p>
         
            <input type="email" placeholder="Enter your email" />
            <Button bg={'blue'} color={"white"}>Subscribe</Button>
          
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
