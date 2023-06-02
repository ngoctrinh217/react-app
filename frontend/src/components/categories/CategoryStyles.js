import styled from "styled-components";
import { mobile } from "../../responsive/Responsive";


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
  ${mobile({ height: "65vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    background-color: white;
    color:black;
    cursor: pointer;
    font-weight:600;
    border-radius: 30px;
${mobile({ padding:"10px"})}
   
`;

const CategoryItem = ({ item }) => {
  return (
    
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>shop now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;