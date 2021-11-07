import React from "react";
import "./Card.scss";
import image from "./lostcity.jpeg";
import { Button } from "semantic-ui-react";

const CardDivision = () => {
  return (
    <div
      className="division-card"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="dark-overlay">
        <section className="title-card">
          <h3 className="heading" style={{ color: "white" }}>
            ROCK CLIMBING
          </h3>
          <p className="subHeading" style={{ color: "white" }}>
            Feedloop enables enterprises across industries to achieve digital
            operational excellence and digital
          </p>
          <Button basic color="black" className="button-card">
            Dicover
          </Button>
        </section>
      </div>
    </div>
  );
};

export default CardDivision;
