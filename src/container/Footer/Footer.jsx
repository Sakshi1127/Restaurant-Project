import React from 'react';

import{FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi';
import { FooterOverlay,Newsletter } from '../../components';
import {images} from '../../constants'
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    {/* <FooterOverlay/> */}
    <Newsletter/>
    
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans'> 35 St, Navi Mumbai 400001,INDIA</p>
          <p className='p__opensans'>+91 4523789155</p>
      </div>
      
    <div className='app__footer-links_logo'>
          <img src={images.indianlogo4} alt="footer-logo"/>
          <p className='p__opensans' > "The best way to find youself is to lose yourself in the service of others."</p>
          <img src={images.spoon} style={{marginTop:15}} alt="spoon"/>
       <div className='app__footer-links_icons'>
          <FiFacebook/>
          <FiInstagram/>
          <FiTwitter/>
        </div>
    </div>


     <div className='app__footer-links_work'>
         <h1 className='app__footer-headtext'>Working Hours</h1>
         <p className='p__opensans'>Monday-Friday:</p>
         <p className='p__opensans'>10:00am - 06:00pm</p>
         <p className='p__opensans'>Saturday-Sunday</p>
         <p className='p__opensans'>10:00am-08:00pm</p>
     </div>

    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2024 Indian Restaurant.All Rights Reserved.</p>

    </div>
  </div>
);

export default Footer;
