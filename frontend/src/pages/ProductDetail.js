import React,{useState, useEffect, useCallback} from 'react';
import { Add, ArrowLeftTwoTone, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import { mobile,mobile1 } from "../responsive/Responsive";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { Button } from "../components/button/Button";
import {getProductData, getProductDataId} from "../api/ProductApi";
import {productModalSlice} from "../redux/product-modal/productModalSlice";
import ImgData from '../assets/ImgData';


// const location = useLocation();
// const id = location.pathname.split("/")[2];
const ProductDetail =()=>{
  const {id} = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState([]);
  console.log(id);   
//   const location = useLocation();
//   const _id = location.pathname.split("/")[2];
  

  useEffect (async () => {
   const data =   await getProductDataId(id);
      setProduct(data.value[0]);
  },[]);
  const removeQuantity = useCallback(() => {
    console.log('oke');
    setQuantity(5);
  },[quantity])

  const addQuantity = useCallback(() => {
    console.log('oke');
    setQuantity(4);
  },[quantity])
  
 

  
  return (
    console.log('render'),
     <Container>
         <Navbar />
       <Wrapper>
         <ImgContainer>
           <Image src={ImgData.filter(ImgData._id === product._id).imgP} alt={product._id} />
       </ImgContainer>
         <InfoContainer>
           <Title>{product.nameproduct}</Title>
           <Desc>
             {/* {product?.brand?.namebrand} */}
           </Desc>
          <FilterContainer>
           <Price>{product.price}</Price>
           </FilterContainer>
           <AddContainer>
             <AmountContainer>
               <Remove />
              <Amount >{quantity}</Amount>
               <Add />
             </AmountContainer>
           <Button>ADD TO CART</Button>
           </AddContainer>
         </InfoContainer>
       </Wrapper>
       <Footer/>
     </Container>
  
  );
};
const Container = styled.div``;

const Wrapper = styled.div`
  margin-top: 5%;
  padding: 50px;
  display: flex;
  ${mobile1({marginTop:"10%", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 80%;
  height: 70vh;
  object-fit: cover;
  ${mobile1({ height: "50%" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  justify-content: flex-start;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile1({ width: "100%" })}
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile1({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
export default ProductDetail;
