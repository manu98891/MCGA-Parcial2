import React from "react";
import styles from "./Inputs.module.css";

const Input = ({ label, type, register, required, errors, name }) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        {...register(name, { required })}
        className={styles.Input}
      />
      {errors && <span>{`This field is required:${label}`}</span>}
    </>
  );
};

export default Input;