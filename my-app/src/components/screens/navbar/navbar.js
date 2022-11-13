import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
        <ul className={styles.navbar_items}>
          <li className={styles.nav_buttons}>
            <a href="/home/index.jsx">Home</a>
          </li>
          <li>
            <a href="/crud">CRUD</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;