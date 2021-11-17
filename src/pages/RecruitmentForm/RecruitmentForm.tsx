import React from "react";
import "./RecruitmentForm.scss";
import { Footer } from "../../components/Footer";
import video from "./example.mp4";

const RecruitmentForm: React.FC = () => {
  return (
    <div className="recruitment" style={{}}>
      <video autoPlay muted loop id="myVideo">
        <source src={video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="form-container">
        <section className="form-field">
          <h1>Form Pendaftaran</h1>
          <p>
            Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
            phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum
            maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore
            latine molestiae, ad mutat oblique delicatissimi pro.
          </p>
          <section className="field-box">
            <label htmlFor="fname">First name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Nama depan"
            />
          </section>
          <section className="field-box">
            <label htmlFor="lname">Last name:</label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Nama belakang"
            />
          </section>
          <section className="field-box">
            <label htmlFor="lname">Last name:</label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Nama belakang"
            />
          </section>
          <section className="field-box">
            <label htmlFor="lname">Last name:</label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Nama belakang"
            />
          </section>
          <section className="field-box">
            <label htmlFor="lname">Last name:</label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Nama belakang"
            />
          </section>
          <section className="field-box">
            <label htmlFor="lname">Last name:</label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Nama belakang"
            />
          </section>

          <section className="field-box">
            <label htmlFor="lname">Last name:</label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Nama belakang"
            />
          </section>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default RecruitmentForm;
