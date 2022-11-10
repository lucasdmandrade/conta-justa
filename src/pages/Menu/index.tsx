import React from "react";
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import {
  ProductCard,
  ProductCardFooter,
  ProductContainer,
  ProductImage,
  ProductTitle,
  SubTitle,
  Title,
} from "./styles";
import { ITable } from "../../types/Tables";
import Footer from "../../components/Footer";
import { getSesstionTable } from "../../utils/getSessionTable";
import OrangeDrink from "../../assets/images/productImages/orangeDrink.jpg";
import MainButton from "../../components/MainButton";
import { products } from "./productsPopulate";

const Menu = ({
  tables,
  setTables,
}: {
  tables: ITable[];
  setTables: React.Dispatch<React.SetStateAction<ITable[]>>;
}) => {
  return (
    <MainContainer>
      <Header PreviousPage="/monta-mesa" />
      <Title>Menu</Title>
      <SubTitle>Mesa {getSesstionTable()}</SubTitle>

      <ProductContainer>
        {products.map((product, key) => (
          <ProductCard>
            <ProductImage src={product.image} alt={product.alt} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductCardFooter>
              <MainButton>Pedir</MainButton>
            </ProductCardFooter>
          </ProductCard>
        ))}
      </ProductContainer>

      <Footer NextPage="/monta-mesa" />
    </MainContainer>
  );
};

export default Menu;
