import React from "react";
import "./style.css";

interface TypeProps {
  // type: string;
  variant?:
    | "h1__title"
    | "h2__subtitle"
    | "h3__textCard"
    | "h4__subtitle"
    | "h5__subletitle__number";
  color?: "primary" | "secondary" | "white";
}

const defaultProps: Partial<TypeProps> = {
  variant: "h1__title",
  color: "white",
};

const Type: React.FC<TypeProps> = ({ children, variant, color }) => {
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
  className += ` ${variant} ${color} `;
  return <h1 className={className}>{children} </h1>;
};

Type.defaultProps = defaultProps;

export default Type;

// variacao 1 = "title"
// variacao 2 = "subtitle"
// variacao 3 = "textCard"
// variacao 4 = "subtitle__Green"
// variacao 5 = "subletitle__Green__text"
// variacao 6 = "subletitle__Green__month"
// variant: "title"
// & "subtitle"
// & "textCard"
// & "subtitle__Green"
// & "subletitle__Green__text"
// & "subletitle__Green__month" ;
