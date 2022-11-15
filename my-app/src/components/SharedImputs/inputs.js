import React from "react";
import styles from "./Inputs.module.css";

const Input = ({ label, type, register, required, errors }) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        {...register(label, { required })}
        className={styles.Input}
      />
      {errors && <span>{`This field is required:${label}`}</span>}
    </>
  );
};

export default Input;