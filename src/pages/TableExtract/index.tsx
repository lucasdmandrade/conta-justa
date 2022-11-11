import React, { useEffect, useState } from "react";
import MainContainer from "../../components/MainContainer";
import {
  ClientExtract,
  DivisionOption,
  ExtractContent,
  Title,
  TotalTableExtract,
  TotalTableExtractInput,
  TotalTableExtractLabel,
  TotalTablePaymentContainer,
  TotalValue,
  TotalValueDivisorSelecter,
} from "./styles";

import { ITable } from "../../types/Tables";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getSesstionTable } from "../../utils/getSessionTable";
import { currencyBRL } from "../../utils/currencyMask";

const TableExtract = ({
  tables,
  setTables,
}: {
  tables: ITable[];
  setTables: React.Dispatch<React.SetStateAction<ITable[]>>;
}) => {
  const [dividedTotalValue, setDividedTotalValue] = useState(1);
  const [isTotalTableValuePaid, setIsTotalTableValuePaid] = useState(false);
  const [isClientValuePaid, setIsClientValuePaid] = useState<boolean[]>([]);

  const returnTotalValueDivisorOptions = () => {
    let divisorValues = [];
    for (var i = 1; i <= 15; i++) {
      divisorValues.push(<DivisionOption key={i}>{i}</DivisionOption>);
    }
    return divisorValues;
  };

  const populateClientPaidOutArray = () => {
    let handleIsClientValuePaid: boolean[] = [];
    tables[getSesstionTable()].clients.forEach(() => {
      handleIsClientValuePaid.push(false);
    });
    setIsClientValuePaid(handleIsClientValuePaid);
  };

  const handleClientPaid = (clientIndex: number) => {
    console.log(clientIndex);
    let handleIsClientValuePaid: boolean[] = isClientValuePaid;

    handleIsClientValuePaid[clientIndex] = true;
    setIsClientValuePaid(handleIsClientValuePaid);
    console.log(handleIsClientValuePaid);
  };

  useEffect(() => {
    console.log(isClientValuePaid);
  }, [isClientValuePaid]);

  useEffect(() => {
    populateClientPaidOutArray();
  }, []);

  return (
    <MainContainer>
      <Header PreviousPage={"/menu"} />
      <Title>Extrato</Title>
      <ExtractContent>
        <TotalTableExtract isPaid={isTotalTableValuePaid}>
          <TotalValue>
            Valor da mesa: {currencyBRL(tables[getSesstionTable()].totalValue)}
          </TotalValue>
          <TotalValueDivisorSelecter
            onChange={(e) => setDividedTotalValue(Number(e.target.value))}
          >
            {returnTotalValueDivisorOptions()}
          </TotalValueDivisorSelecter>
          <TotalValue>
            Total a pagar por pessoa:{" "}
            {currencyBRL(
              tables[getSesstionTable()].totalValue / dividedTotalValue
            )}
          </TotalValue>

          <TotalTablePaymentContainer>
            <TotalTableExtractLabel>Pago</TotalTableExtractLabel>

            <TotalTableExtractInput
              onChange={(e) => setIsTotalTableValuePaid(true)}
              type={"radio"}
            />
          </TotalTablePaymentContainer>
        </TotalTableExtract>

        {tables[getSesstionTable()].clients.map((client, key) => (
          <ClientExtract key={key} isPaid={!!isClientValuePaid[key]}>
            <TotalValue>
              Valor do {client.name}: {currencyBRL(client.personalValue)}
            </TotalValue>

            <TotalValue>{key}</TotalValue>

            <TotalTablePaymentContainer>
              <TotalTableExtractLabel>Pago</TotalTableExtractLabel>
              <TotalTableExtractInput
                onChange={() => handleClientPaid(key)}
                type={"radio"}
              />
            </TotalTablePaymentContainer>
          </ClientExtract>
        ))}
      </ExtractContent>

      <Footer NextPage="/monta-mesa" />
    </MainContainer>
  );
};

export default TableExtract;
