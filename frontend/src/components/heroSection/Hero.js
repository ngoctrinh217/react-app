import React from 'react';
import img1 from '../../assets/img/1629.jpg';
import './HeroStyle.css'

const Hero = () => {
  return (
    <div className='hero'>
        <img alt='HerpImg' src={img1}/>
    <div className ='hero-text'> 
        {/* <h1>Your Journey your story</h1>
        <p>Chose your favourie product</p> */}
        <a href='/'>SHOP NOW!</a>
    </div>
    </div>
  );
}

export default Hero