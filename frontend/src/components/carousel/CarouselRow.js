import React from 'react'
import {Row,Col} from 'antd';
import Slide from './Carousel';
const CarouselRow = () => {
  return (
    <Row>
        <Col >
    <Slide/>
        </Col>
       <Col>
    <Slide/>
        </Col> 
    </Row>

  )
}

export default CarouselRow