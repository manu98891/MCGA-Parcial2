import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.h2_header}>CRUD Products App</h2>
      <p className={styles.p_header}>
        En algún lugar de la mancha cuyo nombre no quiero recordar
      </p>

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

export default Header;