
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
       <div className="footer-cntent-left">
        <img src={assets . logo} alt=""/>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui libero in dolore cumque excepturi aspernatur aut recusandae dolorum soluta nihil?

<div className="footer-social-icons">
  

  <img src={assets.facebook_icon} alt="Facebook icon" />
<img src={assets.twitter_icon} alt="Twitter icon" />
<img src={assets.linkedin_icon} alt="LinkedIn icon" />

</div>
        </p>
        
        </div> 
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
          </div>
        <div className="footer-content-right">
        <h2>GET IN TOUCH</h2> 
        <ul>
          <li>+1-212-456-7890</li>
          <li>contact@tomato.com</li>
          </ul> 

        </div>

      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 @ Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer