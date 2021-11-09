import React from "react";
import "./footer.scss";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-box">
          <section className="footer-left">
            <h1
              className="specialFont"
              style={{ width: "40%", color: "white" }}
            >
              HARSHA PRATALA
            </h1>
            Jl. TMP. Kalibata No.1, RT.4/RW.04, Duren Tiga, Kec. Pancoran, Kota
            Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12760
          </section>
          <section className="footer-right">
            <section className="social-media">
              <FiFacebook className="icon" />
              Harsha Pratala
            </section>
            <section className="social-media">
              <FiInstagram className="icon" />
              @harshapratala
            </section>
            <section className="social-media">
              <FiYoutube className="icon" />
              Harsha Pratala
            </section>
            <section className="social-media">
              <FiTwitter />
              @HarshaPratala
            </section>
          </section>
        </div>
      </div>
      <div className="footer-credit">
        @2021 Harsha Pratal | All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
