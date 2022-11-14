import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.h2_header}>HOME</h2>
      <p className={styles.p_header}>
        En algún lugar de la mancha cuyo nombre no quiero recordar
      </p>
    </header>
  );
};

export default Header;