import React from "react";
import ParalaxComponent from "../../components/ParalaxComponent/ParalaxComponent";
import "./Home.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import CardDivision from "../../components/CardComponent/CardDivision";
import { Button } from "semantic-ui-react";
import CardArticle from "../../components/CardComponent/CardArticle";
import shirtImage from "./shirt.png";
import tributeImage from "./person.png";
import CardProduct from "../../components/CardComponent/CardProduct";
import { Footer } from "../../components/Footer";

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

const Home: React.FC = () => {
  return (
    <div>
      <ParalaxComponent name="propsname" />

      <div className="divisions">
        <section className="title-box">
          <h1 className="heading">Explore and Discover</h1>
          <p className="subHeading">
            Feedloop enables enterprises across industries to achieve digital
            operational excellence and digital customer experience
          </p>
        </section>
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
                <CardDivision division={item} key={idx} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="articles">
        <section className="title-box">
          <h1 className="heading">Latest Articles</h1>
          <p className="subHeading">
            Feedloop enables enterprises across industries to achieve digital
            operational excellence and digital customer experience
          </p>
        </section>
        <section className="content">
          <section className="main-article">
            <div className="main">
              <img
                src="https://pbs.twimg.com/media/E0Vis3sVIAIYcH_.jpg"
                alt="events"
              />
            </div>
            <div className="sider">
              <section className="title-main">
                <h1 className="heading">
                  Harsha Pratala Selengarakan Seminar Tropic To Arctic
                </h1>
                <p className="subHeading">
                  Feedloop enables enterprises across industries to achieve
                  digital operational excellence and digital Feedloop enables
                  enterprises across industries to achieve digital operational
                  excellence and digital Feedloop enables enterprises across
                  industries to achieve digital operational excellence and
                  digital
                </p>
                <Button basic color="black" className="button-sider">
                  Dicover
                </Button>
              </section>
            </div>
          </section>
        </section>
        <section className="article-list-4">
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
        <button className="button-cta">Join Now</button>
      </div>

      <div className="events">
        <section className="title-box">
          <h1 className="heading">Stay tuned, theres Incoming Even</h1>
        </section>
        <section className="content">
          <section className="main-article">
            <div className="main">
              <img
                src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_klook_water/activities/pq1hkwos4nzbktsl8s4d/Ayung%20River%20Light%20Rafting%20Experience%20by%20Bali%20Sobek.jpg"
                alt="article"
              />
            </div>
            <div className="sider">
              <section className="title-main">
                <h1 className="heading">Trilogi Fun Rafting 2022</h1>
                <h4> Sungai Cianten, Bogor Jawa Barat</h4>
                <h3>21 Desember 2022</h3>
                <p className="subHeading">
                  Feedloop enables enterprises across industries to achieve
                  digital operational excellence and digital Feedloop enables
                  enterprises across industries to achieve digital operational
                  excellence and digital Feedloop enables enterprises across
                  industries to achieve digital operational excellence and
                  digital
                </p>
                <h3>HTM 250K</h3>
              </section>
            </div>
          </section>
        </section>
      </div>

      <div className="merchandise">
        <section className="title-box">
          <h1 className="heading">Merchandise</h1>
          <p className="subHeading">
            Support our activities by buying Hola Viva brand products. one of
            the brands of the Harsha Pratala business entity
          </p>
        </section>

        <div className="content">
          <div className="merch-banner">
            <section className="merch-banner-text">
              <h1 className="heading" style={{ color: "white" }}>
                Tetap keren walau di tengah rimba
              </h1>
              <p className="subHeading" style={{ color: "white" }}>
                Feedloop enables enterprises across industries to achieve
                digital operational excellence and digital
              </p>
              <Button id="btn">Discover</Button>
            </section>
            <img src={shirtImage} alt="product" />
          </div>
          <Swiper
            slidesPerView={2.4}
            spaceBetween={30}
            freeMode={false}
            pagination={{
              clickable: true,
            }}
            className="merch-slider"
            initialSlide={0}
          >
            <SwiperSlide>
              <CardProduct />
            </SwiperSlide>
            <SwiperSlide>
              <CardProduct />
            </SwiperSlide>
            <SwiperSlide>
              <CardProduct />
            </SwiperSlide>
            <SwiperSlide>
              <CardProduct />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="tributes">
        <div className="tributes-box">
          <section className="tributes-text">
            <h1 className="heading" style={{ color: "white" }}>
              Tributes To Our Brothers
            </h1>
            <p className="subHeading" style={{ color: "white" }}>
              HP melakukan penyaringan melalui pendidikan dasar dan beberapa
              perjalanan 4 divisi yaitu jeram, panjat tebing, selusur goa, dan
              gunung & hutan . Setelah perjalanan 4 divisi, selanjutnya adalah
              spesialisasi 1 divisi yang telah dipilih.
            </p>
          </section>
          <section className="tribute-image">
            <img src={tributeImage} alt="tributes" id="tributes-image" />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
