import React from "react";
import "./Card.scss";

interface IBannerCardProps {
  division: {
    title: string;
    img: string;
    icon: string;
    description: string;
  };
}

const CardBanner: React.FC<IBannerCardProps> = ({ division }) => {
  return (
    <div
      className="banner-card"
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
        </section>
      </div>
    </div>
  );
};

export default CardBanner;
