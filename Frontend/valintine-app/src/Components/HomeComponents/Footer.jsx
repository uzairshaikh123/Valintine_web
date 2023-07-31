import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
      <div className="footer-section">
          <h3>
            <img style={{width:"80%",height:"100%"}} src="https://valentinesaga.com/wp-content/uploads/2023/07/ValentineSaga-Logo-4-min.png" alt="" />
          </h3>
          <p>Let's Connect With Us</p>
          <ul>
            <li>Github</li>
            <li>Whatsapp</li>
            <li>Linkidin</li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>About</h5>
          <p><a href="" style={{textDecoration:"none",color:"white"}}>Links</a></p>
          <p><a href="" style={{textDecoration:"none",color:"white"}}>Links</a></p>
          <p><a href="" style={{textDecoration:"none",color:"white"}}>Links</a></p>
          <p><a href="" style={{textDecoration:"none",color:"white"}}>Links</a></p>
          <p><a href="" style={{textDecoration:"none",color:"white"}}>Links</a></p>
         
        </div>
        <div className="footer-section">
          <h5>Contact</h5>
          <p><a href="" style={{textDecoration:"none",color:"white"}}>Links</a></p>
          <p><a href="" style={{textDecoration:"none",color:"white"}}>Links</a></p>
          <p><a href="" style={{textDecoration:"none",color:"white"}}>Links</a></p>
          <p><a href="" style={{textDecoration:"none",color:"white"}}>Links</a></p>
          <p><a href="" style={{textDecoration:"none",color:"white"}}>Links</a></p>
        </div>
        <div className="footer-section footer-section-last">
          <h5>Subscribe</h5>
          <p>Get updates and exclusive offers!</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
