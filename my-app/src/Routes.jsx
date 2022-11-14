import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/routes/home";
import Products from "./components/routes/products";


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/home" component={Home } />
      <Route exact path="/products" component={Products} />
      {/* <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/products">
        <Products />
      </Route> */}
      {/* <Route
        path="*"
        element={<Navigate to="/home" replace />}
    /> */}
    </Routes>
    </BrowserRouter>
  );
};

export default Router;