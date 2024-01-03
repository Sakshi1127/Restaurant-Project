import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-overlay flex__center'>
       {/* <img src={images.G} alt='g letter'/> */}
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'> About Us</h1>
        <img src={images.spoon} alt='about spoon' className='spoon__img'/>
        <p className='p__opensans'>At Indian Restaurant , we take pride in crafting an authentic Indian culinary experience. Our dishes blend traditional recipes with modern flair, with the heart of India.</p>
        <button tyoe='button' className='custom__button'>Know More</button>
      </div>
    
    <div className='app__aboutus-content_knife flex__center'>
      <img src={images.knife} alt='about_knife'/>
    </div>
    <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about spoon' className='spoon__img'/>
        <p className='p__opensans'>Step into  Indian Restaurant and let the whispers of spices and the dance of flavors transport you to a culinary realm where every dish tells a tale of India's vibrant gastronomic heritage.</p>
        <button tyoe='button' className='custom__button'>Know More</button>
      </div>

    </div>
    
  </div>
);

export default AboutUs;
