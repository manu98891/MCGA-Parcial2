import React from "react";
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';
import Home from "../routes/home";
import Products from "../routes/products";

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          <ul className={styles.navbar_items}>
            <li className={styles.nav_buttons}>
              {/* <Routes>
                <Route exact path="/home">
                   <Home />
                </Route>
              </Routes> */}
              <a href="/home">Home</a>
            </li>
            <li>
            {/* <Routes>
              <Route exact path="/products">
                <Products />
              </Route>
            </Routes> */}
            <a href="/products">Products</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

 export default Navbar;