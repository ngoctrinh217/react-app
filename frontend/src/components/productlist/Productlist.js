import React,{useState,useEffect}  from 'react';
import Slider from 'react-slick';
import { Routes, Route, Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Productlist.css';
import { getProductData } from '../../api/ProductApi';
import Card from '../card/Card';
import Dataproduct from '../card/Datacard';
import ImgData from '../../assets/ImgData';
import ProductDetail from '../../pages/ProductDetail';
const Productlist = () => {
// const [defaultImage, setDefaultImage] = useState({});
const [product, setProduct] = useState([]);

  useEffect ( async () => {
   const data =   await getProductData();
      setProduct(data.value);
      console.log(data)
  },[])
  
 

  const settings = {
    dots: true,
    infinite: true,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="App">
    <Slider {...settings}>
      
                        {
                            product.map((item, index) => (
                              <Link to={`/productdetail/`+item._id} key={index}>
                              <Card
                                  imgP={ImgData.filter(ImgData._id === product._id).map(imgMap => imgMap.imgP)}
                                  nameproduct={item.nameproduct}
                                  price={item.price}
                                  namebrand={item?.brand?.namebrand}/> 
                                  </Link>
                            ))
                    }
          
    </Slider>
    </div>

  )
}

export default Productlist