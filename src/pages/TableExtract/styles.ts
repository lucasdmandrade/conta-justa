import styled from "styled-components";
import { darkGrey, smokeGray, solidBlack } from "../../theme/colors";

export const Title = styled.h1`
  margin-top: 50px;
  font-size: 1.5em;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif; ;
`;

export const ExtractContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TotalTableExtract = styled.div<{ isPaid: boolean }>`
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 15px;
  border-radius: 15px;
  border: 1px solid ${darkGrey};
  margin: 10px;
  background-color: ${smokeGray};
  opacity: ${({ isPaid }) => (isPaid ? 0.5 : 1)};
`;

export const TotalValue = styled.h2`
  margin-top: 10px;
  font-size: 1.3em;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
`;

export const TotalValueDivisorSelecter = styled.select`
  margin-top: 15px;
  width: 100px;
  height: 30px;
  max-width: 90%;
  border-radius: 15px;
  border-color: ${solidBlack};
  text-align: center;
  font-size: 1.1em;
  margin: 5px 25px 25px;
`;

export const DivisionOption = styled.option``;

export const TotalValueDivisorLabel = styled.label`
  margin-top: 15px;
  height: 30px;
  border-radius: 15px;
  font-size: 1.1em;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  margin: 25px 0 0;
`;

export const TotalTablePaymentContainer = styled.div`
  margin-top: 10px;
`;

export const TotalTableExtractInput = styled.input`
  height: 15px;
  width: 15px;
`;

export const TotalTableExtractLabel = styled.label`
  font-size: 1.2em;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif; ;
`;

export const ClientExtract = styled.div<{ isPaid: boolean }>`
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 15px;
  border-radius: 15px;
  border: 1px solid ${darkGrey};
  background-color: ${smokeGray};
  margin: 10px;
  opacity: ${({ isPaid }) => (isPaid ? 0.5 : 1)};
`;
