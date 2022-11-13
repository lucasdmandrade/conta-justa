import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Home page", () => {
  render(<App />);
  const title = screen.getByText(/Retaurante Conta Justa/i);
  expect(title).toBeInTheDocument();
});
