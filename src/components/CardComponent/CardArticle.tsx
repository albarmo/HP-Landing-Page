import "./Card.scss";
import businessPerson from "../../asset/img/bussiness-person.jpg";
import { useHistory } from "react-router";

const CardArticle = () => {
  const history = useHistory();
  const src = businessPerson;

  return (
    <div className="article-card">
      <div className="article-image">
        <img src={src} alt="article" />
      </div>
      <div className="article-title">
        <h4 className="heading" onClick={() => history.push("/detail/1")}>
          Harsha Pratala Selengarakan Seminar Tropic To Arctic
        </h4>
        <p className="subHeading">23 JANUARI 2020</p>
      </div>
    </div>
  );
};

export default CardArticle;
