import React from "react";
import "./detail.scss";
import "swiper/swiper-bundle.min.css";
import tributeImage from "./person.png";
import { Footer } from "../../components/Footer";

const Detail: React.FC = () => {
  return (
    <div>
      <div className="detail">
        <div
          className="header-detail"
          style={{
            backgroundImage: `url("http://3.bp.blogspot.com/-uC0M5zJhg2k/UncqfMgC7yI/AAAAAAAAAh4/KCjx886hcSg/s1600/proxy.jpg")`,
          }}
        >
          <div className="heading-title">
            <section className="topic">
              <h4>Events</h4>
            </section>
            <h1 className="heading" style={{ color: "white" }}>
              Save The World By Your Hands
            </h1>
            <section className="properties">
              <p className="subHeading">
                21 Januari 2021 - HP 146 (Albar Moerhamsa)
              </p>
            </section>
          </div>
        </div>

        <div className="detail-content">
          <section className="reader">
            <h3>Save The World By Your Hands</h3>
            <p>
              Senin 28 Oktober 2013, Universitas Trilogi Menyambut Hari Sumpah
              Pemuda dengan melakukan serangkaian kegiatan acara yang ber-tema
              &ldquo;Pemuda Peduli Lingkungan&rdquo; (Save The World By Your
              Hands). Serangkaian kegiatan tersebut meliputi upacara sumpah
              pemuda, pembuatan lubang biopori dan penanaman pohon. Kegiatan ini
              berlangsung di sekitar lingkungan kampus Universitas Trilogi.
            </p>
            <p>
              <img
                src="http://3.bp.blogspot.com/-uC0M5zJhg2k/UncqfMgC7yI/AAAAAAAAAh4/KCjx886hcSg/s1600/proxy.jpg"
                alt="tes"
                width="371"
                height="209"
              />
            </p>
            <p>
              Dihadiri oleh perwakilan pelajar serta guru dari SMA/SMK di
              Jakarta, civitas Akademika Universitas
              Trilogi,&nbsp;&nbsp;masyarakat sekitar kampus, pedagang Pusat
              Jajanan Pancoran (PJP), KNPI, dan Pramuka. Kegiatan ini
              berlangsung sampai pukul 11.00 siang, diselingi dengan coffee
              break dengan hidangan bajigur dan buah-buahan..
            </p>
            <p>
              <img
                src="http://1.bp.blogspot.com/-z8GqnT60d-U/UncqYMViIhI/AAAAAAAAAhg/sTi63_pZmps/s1600/IMG-20131027-11222.jpg"
                alt="h1"
                width="466"
                height="349"
              />
            </p>
            <p>
              Gerakan &ldquo;Pemuda Peduli Lingkungan&rdquo; ini sebagai salah
              satu upaya menumbuhkan kepedulian terhadap lingkungan. Kepedulian
              ini dibangun sebagai motivasi untuk menyelamatkan lingkungan dari
              ancaman bencana maupun kepunahan. Dalam acara ini juga kita dapat
              belajar langsung bagaimana cara membuat Lobang Resapan Biopori
              (LRB) dari penemu/penggagasnya yang hadir di tengah acara yaitu
              Bapak&nbsp;&nbsp;Ir. Kamir R. Brata, M.Sc.
            </p>
            <p>
              Dalam sambutannya, Ir. Kamir R. Brata, M.Sc mengatakan bahwa
              publikasi cara pembuatan LRB banyak mengalami kekeliruan, salah
              satunya adalah pembuatan LRB yang memakai paralon didalam tanah.
              Hal ini menyebabkan makhluk-makhluk tanah tidak dapat masuk
              mengurai sampah organic yang ada didalamnya, karena terhalang oleh
              paralon tersebut. Seharusnya dalam pembuatan LRB, tidak perlu
              memakai paralon, dan hanya atapnya yang diperkuat oleh semen, agar
              bentuk lubang tetap terjaga.
            </p>
            <p>
              Dengan acara sumpah pemuda ini, semoga kita termotivasi untuk
              tetap memperhatikan kelestarian lingkungan ditengah-tengah
              pembangunan kota yang pesat. Tidak hanya mengeluh tanpa melakukan
              sesuatu ketika bencana telah terjadi karena kurangnya perhatian
              terhadap lingkungan ini.&nbsp;
            </p>
          </section>
        </div>
      </div>

      <div className="tributes">
        <div className="tributes-box">
          <section className="tributes-text">
            <h1 className="heading" style={{ color: "white" }}>
              Disini bisa diisi beda beda
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

export default Detail;
