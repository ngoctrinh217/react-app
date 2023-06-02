import styled from "styled-components";
import  CategoryData  from "./CategoryData";
import CategoryItem from "./CategoryStyles";
import { mobile } from "../../responsive/Responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
align-content: center;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

const Categories = () => {
  return (
    <Container>
      {CategoryData.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;