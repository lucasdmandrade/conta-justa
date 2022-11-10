import React, { useState } from "react";
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import {
  ProductCard,
  ProductCardFooter,
  ProductContainer,
  ProductImage,
  ProductPrice,
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
import ConfirmModal from "./ConfirmModal";
import { currencyBRL } from "../../utils/currencyMask";

const Menu = ({
  tables,
  setTables,
}: {
  tables: ITable[];
  setTables: React.Dispatch<React.SetStateAction<ITable[]>>;
}) => {
  const [selectedProduct, setselectedPoduct] = useState("");
  const [isConfirmModalVisible, setIsCOnfirmModalVisible] = useState(false);

  const handleShowConfirmModal = () => {
    setIsCOnfirmModalVisible(!isConfirmModalVisible);
  };

  const confirmPurchase = (productName: string) => {
    setselectedPoduct(productName);
    handleShowConfirmModal();
  };

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
            <ProductPrice>{currencyBRL(product.price)}</ProductPrice>
            <ProductCardFooter>
              <MainButton onClick={() => confirmPurchase(product.title)}>
                Pedir
              </MainButton>
            </ProductCardFooter>
          </ProductCard>
        ))}
      </ProductContainer>

      <Footer NextPage="/monta-mesa" />
      <ConfirmModal
        isVisible={isConfirmModalVisible}
        product={selectedProduct}
      />
    </MainContainer>
  );
};

export default Menu;
