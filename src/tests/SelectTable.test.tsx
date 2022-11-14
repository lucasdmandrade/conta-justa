import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SelectTable from "../pages/SelectTable";
import { ITable } from "../types/Tables";
import { BrowserRouter } from "react-router-dom";

const mockedTalbes: ITable[] = [
  { totalValue: 50, clients: [{ name: "MockedClient1", personalValue: 15 }] },
];

describe("Geral tests", () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    jest.restoreAllMocks();
  });

  it("renders select table page", () => {
    render(
      <BrowserRouter>
        <SelectTable tables={mockedTalbes} />
      </BrowserRouter>
    );
    const title = screen.getByText(/Retaurante Conta Justa/i);
    expect(title).toBeInTheDocument();
  });

  it("renders Home page", async () => {
    const mockedButtonFuntion = jest.fn();
    render(
      <BrowserRouter>
        <SelectTable tables={mockedTalbes} />
      </BrowserRouter>
    );

    const NextButton = screen.getByRole("link");

    NextButton.onclick = mockedButtonFuntion;

    await fireEvent.click(NextButton);
    expect(NextButton).toBeInTheDocument();
    expect(mockedButtonFuntion).toHaveBeenCalled();
  });
});