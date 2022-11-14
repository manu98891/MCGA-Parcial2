import React from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';
import Home from '../routes/home';
import Products from '../routes/products';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Routes>
        <Route exact path="/home" component={Home} />
        <Route exact path="/products" component={Products} />
        {/* <Route path="/products/form" component={ProductsForm} />
        <Route path="/products/:id" component={ProductsForm} /> */}
         <Route
        path="*"
        element={<Navigate to="/home" replace />}
      />
      </Routes>
      <Main/>
      <Footer />
    </div>
  );
}
export default Layout;