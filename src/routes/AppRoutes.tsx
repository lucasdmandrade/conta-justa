import React, { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HandleTable from "../pages/HandleTable";
import Menu from "../pages/Menu";
import SelectTable from "../pages/SelectTable";
import TableExtract from "../pages/TableExtract";
import { ITable } from "../types/Tables";

const AppRoutes = () => {
  const [tables, setTables] = useState<ITable[]>([]);

  const populateTables = () => {
    let handleTables = [];
    for (var i = 0; i <= 10; i++) {
      handleTables.push({ totalValue: 0, clients: [] });
    }
    setTables(handleTables);
  };

  useEffect(() => {
    populateTables();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SelectTable tables={tables} />} />
          <Route
            path="/monta-mesa"
            element={<HandleTable tables={tables} setTables={setTables} />}
          />
          <Route
            path="/menu"
            element={<Menu tables={tables} setTables={setTables} />}
          />
          <Route
            path="/extrato"
            element={<TableExtract tables={tables} setTables={setTables} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
