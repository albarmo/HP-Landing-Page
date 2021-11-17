import React from "react";
import { Icon, Transition } from "semantic-ui-react";
import "./navbar.scss";

type Props = {
  menu: { name: string; path: string } | null | undefined;
};

const Menu = () => {
  return (
    <ul>
      <li>Artikel</li>
      <li>Kontak Kami</li>
      <li>Penjelajahan</li>
      <li>Majalah Vegetasi</li>
    </ul>
  );
};

const NavbarComponent: React.FC<Props> = () => {
  const [mobileMenuDisplay, setMobileMenuDisplay] = React.useState(false);
  const [mobileSearchDisplay, setMobileSearchDisplay] = React.useState(false);
  const [scrollY, updateScrollY] = React.useState(0);

  // Handle Scroll Function to handle navbar when scrolling
  const handleScroll = () => {
    const position = window.pageYOffset;
    updateScrollY(position);
  };

  // Handle show menu on mobile screen when bar icon clicked
  const barClickHandler = () => {
    setMobileMenuDisplay(!mobileMenuDisplay);
    if (mobileSearchDisplay === true) setMobileSearchDisplay(false);
    console.log("Bars Clicked : ", mobileMenuDisplay);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div
      className="navbar"
      style={
        scrollY > 0
          ? {
              backgroundColor: "white",
              color: "black",
              boxShadow: "0 1px 2px #ccc",
              transition: "0.3s",
            }
          : {
              backgroundColor: "transparent",
              color: "white",
            }
      }
    >
      <div className="container">
        <a href="/">
          <h1 className="logo specialFont">HARSHA PRATALA</h1>
        </a>

        <div className="icon-bars" onClick={() => barClickHandler()}>
          {mobileMenuDisplay === true ? (
            <Transition animation="pulse" duration={500} visible={true}>
              <Icon disabled name="close" size="large" />
            </Transition>
          ) : (
            <Icon disabled name="bars" size="large" />
          )}
        </div>

        {mobileMenuDisplay === true ? (
          <Transition.Group animation="fade down" duration={300}>
            <div className="mobile-menu">
              <Menu />
            </div>
          </Transition.Group>
        ) : (
          <>
            <div className="menu">
              <Menu />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavbarComponent;
