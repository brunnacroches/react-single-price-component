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
    <div className="CardPrice">
      <div className="CardPrice__first">
        <div className="CardPrice__first__title">
          <Type variant="h1__title" color="primary">
            Join our community
          </Type>
        </div>
        <div className="CardPrice__first__sub">
          <Type variant="h2__subtitle" color="secondary">
            30-day, hassle-free money back guarantee
          </Type>
        </div>
        <div className="CardPrice__first__text">
          <Type variant="h3__textCard" color="fourth">
            Grain acess to our full library of tutorials along with expert code
            reviews. <br />
            Perfect for any developers who are serious about honing their
            skills.
          </Type>
        </div>
      </div>
      <div className="CardPrice__second">
        <div className="CardPrice__second__monthly">
          <Type variant="h3__textCard" color="third">
            Monthly Subscription
          </Type>
        </div>
        <div className="CardPrice__second__price">
          <Type variant="h5__subletitle__number" color="third">
            {" "}
            $29{" "}
          </Type>
        </div>
        <div className="CardPrice__second__month">
          <Type variant="h4__subtitle" color="third">
            per month
          </Type>
        </div>
        <div className="CardPrice__second__full">
          <Type variant="h4__subtitle" color="third">
            Full access for less than $1 a day
          </Type>
        </div>
        <div className="CardPrice__second__button">
          <Button button={button}>Sing Up</Button>
        </div>
      </div>
      <div className="CardPrice__third">
        <div className="CardPrice__third__why">
          <Type variant="h3__textCard" color="third">
            Why Us
          </Type>
        </div>
        <div className="CardPrice__third__text">
          <Type variant="h4__subtitle" color="third">
            Tutorials by industry experts <br /> Peer & expert code review{" "}
            <br />
            Coding exercises <br />
            Access to our GitHub repos <br />
            Community forum <br />
            Flashcard decks <br />
            New videos every week
          </Type>
        </div>
      </div>
    </div>
  );
};

export default SinglePrice;
