import React from "react";
import "./List.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Input } from "semantic-ui-react";
import CardArticle from "../../components/CardComponent/CardArticle";
import { Footer } from "../../components/Footer";
import { useHistory } from "react-router";
import BannerCard from "../../components/CardComponent/CardFull";

const divisions = [
  {
    title: "Mountaineering",
    img: "https://ak.picdn.net/offset/photos/5f9b1e736f52af4409e4dc05/medium/offset_1027851.jpg",
    description:
      "Panjat gunung atau pendakian gunung adalah olahraga, hobi, ataupun profesi berjalan dan mendaki pegunungan.",
    icon: "",
  },
  {
    title: "Rafting",
    img: "https://www.king-adventure.com/wp-content/uploads/2020/06/outbound-bandung-rafting-panggalengan-3.jpg",
    description:
      "Arung jeram adalah suatu aktifitas pengarungan bagian alur sungai yang berjeram atau riam, dengan menggunakan wahana tertentu. Pengertian wahana dalam pengarungan sungai berjeram atau riam yaitu sarana atau alat yang terdiri dari perahu karet, kayak, kano, dan dayung.",
    icon: "",
  },
  {
    title: "Rock Climbing",
    img: "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_650,q_auto,w_576/v1/filestore/zgvk2o4nbn8u9htiq9b2frwti9aj_shutterstock_413207959.jpg",
    description:
      "Panjat Tebing atau istilah asingnya dikenal dengan Rock Climbing merupakan salah satu dari sekian banyak olahraga alam bebas dan merupakan salah satu bagian dari mendaki gunung yang tidak bisa dilakukan dengan cara berjalan kaki melainkan harus menggunakan peralatan dan teknik-teknik tertentu untuk bisa melewatinya",
    icon: "",
  },
  {
    title: "Caving",
    img: "https://www.superadventure.co.id/uploads/news/2019/10/10/770f6fc4568e.jpg",
    description:
      "Susur gua atau jelajah gua adalah olahraga rekreasi menjelajahi gua. Tantangan dari olahraga ini tergantung dari gua yang dikunjungi, tetapi sering kali termasuk negosiasi lubang, kelebaran, dan air. Pemanjatan atau perangkakan sering dilakukan dan tali juga digunakan di banyak tempat",
    icon: "",
  },
];

const List: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <div className="list-header">
        <Swiper
          slidesPerView={1}
          freeMode={false}
          pagination={{
            clickable: true,
          }}
          className="slider"
          initialSlide={0}
        >
          {divisions.map((item, idx) => {
            return (
              <SwiperSlide>
                <BannerCard division={item} key={idx} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="list-articles">
        <section className="title-box">
          <h1 className="heading">Articles</h1>
          <p className="subHeading">
            Feedloop enables enterprises across industries to achieve digital
            operational excellence and digital customer experience
          </p>
          <Input
            icon="search"
            placeholder="Search..."
            style={{ width: "80%" }}
          />
        </section>
        <section className="article-list">
          <CardArticle />
          <CardArticle />
          <CardArticle />
          <CardArticle />
          <CardArticle />
          <CardArticle />
          <CardArticle />
          <CardArticle />
          <CardArticle />
          <CardArticle />
        </section>
      </div>

      <div className="recruitment-cta">
        <section className="text-cta">
          <h2 className="heading" style={{ color: "white" }}>
            Mari bergabung dan menjelajah bersama kami sekarang.
          </h2>
          <p>
            HP melakukan penyaringan melalui pendidikan dasar dan beberapa
            perjalanan 4 divisi yaitu jeram, panjat tebing, selusur goa, dan
            gunung dan hutan .
          </p>
        </section>
        <button
          className="button-cta"
          onClick={() => history.push("/recruitment")}
        >
          Join Now
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default List;
