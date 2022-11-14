import React from "react";
import styles from "./Body.module.css";

const Body = () => {
  return (
    <body className={styles.body}>
      <p className={styles.p_body}>
        Product CRUD
      </p>
    </body>
  );
};

export default Body;