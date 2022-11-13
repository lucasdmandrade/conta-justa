import styled from "styled-components";

export const Title = styled.h2`
  margin-top: 30px;
  font-size: 1.5em;
`;

export const SubTitle = styled.h3`
  margin-top: 5px;
  font-size: 1.3em;
`;

export const ProductContainer = styled.div`
  max-width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const ProductCard = styled.div`
  height: 280px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  margin: 25px;
  padding: 10px;
`;

export const ProductImage = styled.img`
  width: 160px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 15px;
`;

export const ProductTitle = styled.h1`
  margin-top: 15px;
  font-size: 1.3em;
  text-align: center;
`;

export const ProductPrice = styled.h2`
  margin-top: 10px;
  font-size: 1.2em;
  text-align: center;
`;

export const ProductCardFooter = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
