
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Button = styled.button`
    border:10px;
    padding: 10px;
    background-color: white;
    color:white;
    cursor: pointer;
    font-weight: 60;
`;
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
        
      ))}

  
    </Container>
  );
};

export default Products;