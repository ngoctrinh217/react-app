import React from 'react';
import { Row, Col, Carousel } from 'antd';
import img1 from '../../assets/img/product-1.jpg'
import img2 from '../../assets/img/product-2.jpg'
import './Carousel.css'
const contentStyle = {
  color: '#fff',
  textAlign: 'center',
  width: '50%',
  margin: '30px 10px 0 0',
  flexDirection: 'row',
};
const Slide = () => {
  
  return (

    <div>
    <Carousel autoplay dots={false} fade={true}>
      <div >
        <img  style={contentStyle} src={img1} alt='baner1'/>
      </div>
      <div>
       <img  style={contentStyle} src={img2} alt='baner2'/>
      </div>
    </Carousel>
    </div>
  );
};
export default Slide;