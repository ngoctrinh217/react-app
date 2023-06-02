import React, {useState, useEffect} from 'react';
import './Card.css';
import Datacard from './Datacard';
import { getProductData } from '../../api/ProductApi';
import { Link } from 'react-router-dom';
import { set } from '../../redux/product-modal/productModalSlice';
import { useDispatch } from 'react-redux'


const Card = (props) => {
  // const [product, setProduct] = useState([]);

  // useEffect ( async () => {
  //  const data =   await getProductData();
  //     setProduct(data.value);
  // },[])
  // console.log(product)
  return (
    <div className='style'>
 
      <div className="card">
    
        <div className="card-top" key={props._id}>
          <img src={props.imgP} />
        </div>
        <div className="card-bottom">
        <h1>{props.nameproduct}</h1>
          {/* <span>{item.quantity}</span> */} 
          <span className="category">{props.namebrand}</span>
          <h3>{props.price}$</h3>
        </div>
      </div>
    </div>
  )
}

export default Card