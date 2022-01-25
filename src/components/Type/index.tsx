import React from "react";
import "./style.css";

interface TypeProps {
  type: string;
}

const Type: React.FC<TypeProps> = ({ type }) => {
  return <h1 className="type"> {type} </h1>;
};

export default Type;
