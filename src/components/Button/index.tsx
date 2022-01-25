import React from "react";
// import "./styles.css";

interface ButtonProps {
  text: string;
  variant?: "outlined" | "contained";
}
// ? esse atributo é opicional ele pode ou nao exisitir

const defaultProps: Partial<ButtonProps> = { variant: "contained" };

const Button: React.FC<ButtonProps> = ({ text, variant }) => {
  let className = "button";
  if (variant === "outlined") {
    className += " button--outlined";
  }
  return <button className={className}>{text}</button>;
};

Button.defaultProps = defaultProps;

export default Button;
