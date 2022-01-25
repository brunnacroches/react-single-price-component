import React from "react";
import "./style.css";

interface TypeProps {
  text: string;
}

const Type: React.FC<TypeProps> = ({ text }) => {
  return <h1 className="type"> {text} </h1>;
};

export default Type;
