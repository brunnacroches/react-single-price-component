import React from "react";
import "./style.css";

interface TypeProps {
  // type: string;
  variant?:
    | "h1__title"
    | "h2__subtitle"
    | "h3__textCard"
    | "h4__subtitle"
    | "h5__subletitle__number"
    | "h6__subletitle__text2";
  color?: "primary" | "secondary" | "third" | "fourth" | "fifth";
  number?: "1" | "29";
}

const defaultProps: Partial<TypeProps> = {
  variant: "h1__title",
  color: "primary",
};

const Type: React.FC<TypeProps> = ({ children, variant, color, number }) => {
  let className = "type";
  // if (variant === "h1__title") {
  //   className += " h1__title";
  // }
  // if (variant === "h2__subtitle") {
  //   className += " h2__subtitle";
  // }
  // if (variant === "h3__textCard") {
  //   className += " h3__textCard";
  // }
  // if (variant === "h4__subtitle__Green") {
  //   className += " h4__subtitle__Green";
  // }
  // if (variant === "h5__subletitle__Green__number") {
  //   className += " h5__subletitle__Green__number";
  // }
  className += ` ${variant} ${color} ${number}`;
  return <h1 className={className}>{children} </h1>;
};

Type.defaultProps = defaultProps;

export default Type;
