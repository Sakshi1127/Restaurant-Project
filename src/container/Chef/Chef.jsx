import React from 'react';

import {images} from '../../constants'
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>

  <div className='app__wrapper_img app__wrapper_img-reverse'>
  <img src={images.chef} alt='chef'/>
  </div>

  <div className='app__wrapper_info'>
    <SubHeading title="Chef's Word"/>
    <h1 className='headtext__cormorant'> What We Believe In</h1>
    <div className='app__chef-content'>
       <div className='app__chef-content_quote'>
        <img src={images.quote} alt='quote'/>
         <p className='p__opensans'>Welcome to our culinary haven, where each dish is an artisanal 
         creation.</p>
       </div>
     
        <p className='p__opensans'>Our chefs passionately 
         curate a gastronomic journey, sourcing the freshest ingredients in a commitment to farm-to-table 
         freshness.Join us on a voyage of taste, where each bite tells a story of passion, precision, and 
         the pursuit of perfection. </p>
      
    </div>

<div className='app__chef-sign'>
   <p>Vineet Bhatia</p>
   <p className='p__opensans'>Chef & Founder</p>

</div>
  </div>
  </div>
);

export default Chef;
