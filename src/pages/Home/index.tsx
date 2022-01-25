import React from "react";
import Button from "../../components/Button";
import Type from "../../components/Type";
import SinglePrice from "../../containers/SinglePrice";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <SinglePrice button="Sing up" type="Join our community" />
    </div>
  );
};

export default Home;
