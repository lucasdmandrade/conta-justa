import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { currencyBRL } from "./utils/currencyMask";
import { getSesstionTable } from "./utils/getSessionTable";
import { amountsToBeFormattedMock } from "./mocks/amountMocks";

describe("Geral tests", () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    jest.restoreAllMocks();
  });

  it("renders Home page", () => {
    render(<App />);
    const title = screen.getByText(/Retaurante Conta Justa/i);
    expect(title).toBeInTheDocument();
  });

  it("currency mask return correct value formater", () => {
    expect(currencyBRL(16.8)).toMatch(/16,80/);
  });

  for (const amount of amountsToBeFormattedMock) {
    it(`Should return ${amount.expected} when ${amount.given} is provided`, () => {
      const result = currencyBRL(amount.given);

      expect(result.replace(/\u00a0/g, " ")).toEqual(amount.expected);
    });
  }

  it("should get table from session storage", () => {
    window.sessionStorage.setItem("sessionTable", "2");
    const actualValue = getSesstionTable();
    expect(actualValue).toEqual(2);
  });
});
