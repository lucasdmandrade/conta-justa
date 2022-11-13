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
  TotalValueDivisorLabel,
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
  const [isTotalTableValuePaid, setIsTotalTableValuePaid] = useState(
    tables[getSesstionTable()].totalValue === 0
  );
  const [isClientValuePaid, setIsClientValuePaid] = useState<boolean[]>([]);

  const returnTotalValueDivisorOptions = () => {
    let divisorValues = [];
    for (var i = 1; i <= 15; i++) {
      divisorValues.push(<DivisionOption key={i}>{i}</DivisionOption>);
    }
    return divisorValues;
  };

  const populateClientPaidOutArray = () => {
    if (!tables[getSesstionTable()].clients.length) {
      return;
    }
    let handleIsClientValuePaid: boolean[] = [];
    tables[getSesstionTable()].clients.map((client, index) => {
      handleIsClientValuePaid.push(
        tables[getSesstionTable()].clients[index].personalValue === 0
      );
    });
    setIsClientValuePaid([...handleIsClientValuePaid]);
  };

  const handleClientPaid = (clientIndex: number) => {
    let handleIsClientValuePaid: boolean[] = isClientValuePaid;

    handleIsClientValuePaid[clientIndex] = true;
    setIsClientValuePaid([...handleIsClientValuePaid]);
  };

  const isAllTableClientsPaid = () => {
    return isClientValuePaid.every((isPaid) => isPaid);
  };

  const disableFooterButton = () => {
    if (tables[getSesstionTable()].totalValue > 0) {
      if (!isClientValuePaid.length) {
        return !isTotalTableValuePaid;
      }
    }
    return !(isAllTableClientsPaid() && isTotalTableValuePaid);
  };

  const cleanTable = () => {
    let handleTables = tables;

    handleTables[getSesstionTable()] = { totalValue: 0, clients: [] };
    setTables(handleTables);
  };

  useEffect(() => {
    populateClientPaidOutArray();
  }, []);

  return (
    <MainContainer>
      <Header PreviousPage={"/menu"} />
      <Title>Extrato</Title>
      <ExtractContent>
        <TotalTableExtract
          isPaid={
            isTotalTableValuePaid || tables[getSesstionTable()].totalValue === 0
          }
        >
          <TotalValue>
            Valor da mesa: {currencyBRL(tables[getSesstionTable()].totalValue)}
          </TotalValue>

          <TotalValueDivisorLabel>Quantidade de pessoas</TotalValueDivisorLabel>
          <TotalValueDivisorSelecter
            onChange={(e) => setDividedTotalValue(Number(e.target.value))}
            disabled={
              isTotalTableValuePaid ||
              tables[getSesstionTable()].totalValue === 0
            }
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
              checked={
                isTotalTableValuePaid ||
                tables[getSesstionTable()].totalValue === 0
              }
            />
          </TotalTablePaymentContainer>
        </TotalTableExtract>

        {tables[getSesstionTable()].clients.map((client, key) => (
          <ClientExtract
            key={key}
            isPaid={isClientValuePaid[key] || client.personalValue === 0}
          >
            <TotalValue>
              Valor do {client.name}: {currencyBRL(client.personalValue)}
            </TotalValue>

            <TotalTablePaymentContainer>
              <TotalTableExtractLabel>Pago</TotalTableExtractLabel>
              <TotalTableExtractInput
                onChange={({ target }) => handleClientPaid(key)}
                type={"radio"}
                checked={isClientValuePaid[key]}
              />
            </TotalTablePaymentContainer>
          </ClientExtract>
        ))}
      </ExtractContent>

      <Footer
        disabled={disableFooterButton()}
        NextPage="/"
        secondAction={cleanTable}
      />
    </MainContainer>
  );
};

export default TableExtract;
