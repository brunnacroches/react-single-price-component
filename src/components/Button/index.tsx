import React from "react";
import "./style.css";

interface ButtonProps {
  button: string;
}
// ? esse atributo é opicional ele pode ou nao exisitir

const Button: React.FC<ButtonProps> = ({ button }) => {
  return <button className="button">{button}</button>;
};

export default Button;
