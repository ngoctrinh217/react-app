import React,{useState,useEffect} from 'react';
import ImgData from '../../assets/ImgData';
import {getCart} from '../../api/TestApi';
export const Test =()=>{
const [product, setProduct] = useState([]);
  useEffect ( async () => {
   const data =   await getCart();
      setProduct(data.value);
  },[])
  console.log(product)
  return(
    <div>
    {ImgData.map((item) =>(
      <img src={item.imgP}/>
    ))}
    </div>
  )
}
export default Test;