import React from "react";
import Button from "../../components/Button";
import Type from "../../components/Type";
import SinglePrice from "../../containers/SinglePrice";

import "./style.css";

// function TypographySingle({ type }: TypeProps) {
//   return <span>{type}</span>;
// }

const Home = () => {
  return (
    <div className="home">
      <SinglePrice button="Sing up" type="" />
    </div>
  );
};

export default Home;
