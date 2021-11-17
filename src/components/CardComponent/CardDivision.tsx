import React from "react";
import { useHistory } from "react-router";
import "./Card.scss";

interface IDivisionCardProps {
  division: {
    title: string;
    img: string;
    icon: string;
    description: string;
  };
}

const CardDivision: React.FC<IDivisionCardProps> = ({ division }) => {
  const history = useHistory();
  return (
    <div
      className="division-card"
      style={{
        backgroundImage: `url(${division.img})`,
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.747)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="dark-overlay">
        <section className="title-card">
          <h3 className="heading" style={{ color: "white" }}>
            {division.title}
          </h3>
          <p className="subHeading" style={{ color: "white" }}>
            {division.description}
          </p>
          <button
            className="button-card"
            onClick={() => history.push("/list/division")}
          >
            Dicover
          </button>
        </section>
      </div>
    </div>
  );
};

export default CardDivision;
