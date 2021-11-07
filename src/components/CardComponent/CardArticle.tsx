import React from "react";
import "./Card.scss";
import businessPerson from "../../asset/img/bussiness-person.jpg";

const CardArticle = () => {
  const src = businessPerson;

  return (
    <div className="article-card">
      <div className="article-image">
        <img src={src} />
      </div>
      <div className="article-title">
        <h4 className="heading">
          Harsha Pratala Selengarakan Seminar Tropic To Arctic
        </h4>
        <p className="subHeading">23 JANUARI 2020</p>
      </div>
    </div>
  );
};

export default CardArticle;
