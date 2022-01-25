import React from "react";
import Type from "../../components/Type";
import Button from "../../components/Button";

export interface SinglePriceProps {
  button: string;
  type: string;
}

const SiglePrice: React.FC<SinglePriceProps> = ({ button, type }) => {
  return <div className="PriceGrid"></div>;
};

export default SiglePrice;
