import React from "react";
import Type from "../../components/Type";
import Button from "../../components/Button";
import "./style.css";

export interface SinglePriceProps {
  type: string;
  button: string;
}

const SinglePrice: React.FC<SinglePriceProps> = ({ button, type }) => {
  return (
    <div className="PriceSingle">
      <div className="PriceSingle__Card">
        <Type type={type} />
      </div>
      <div className="PriceSingle__Card__Button">
        <Button text={button} />
      </div>
    </div>
  );
};

export default SinglePrice;
