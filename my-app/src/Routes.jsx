import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/routes/home";
import Products from "./components/routes/products";

const Router = () => {
  return (
    
    <Routes>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/products">
        <Products />
      </Route>
      <Route
        path="*"
        element={<Navigate to="/home" replace />}
      />
    </Routes>
  );
};

export default Router;