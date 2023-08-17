import React from "react";
import bStyles from "../Styles/Button.module.css";

export const Button = (props) => {
  return <button className={bStyles.b1}>{props.buttonText}</button>;
};
