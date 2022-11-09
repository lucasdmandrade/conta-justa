import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HandleTable from "../pages/HandleTable";
import SelectTable from "../pages/SelectTable";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SelectTable />} />
          <Route path="/monta-mesa" element={<HandleTable />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
