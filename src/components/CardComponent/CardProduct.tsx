import React from "react";
import "./Card.scss";
import image from "./shirtV.png";
import { Button } from "semantic-ui-react";

const CardProduct = () => {
  return (
    <div
      className="product-card"
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
            RP. 125K
          </Button>
        </section>
      </div>
    </div>
  );
};

export default CardProduct;
