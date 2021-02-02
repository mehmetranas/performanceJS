import React, { useRef } from "react";
import { Button, Select, Grid } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

//Components
import { LanguageSelectBox } from "../../Components";

// Styles
import styles from "./Header.module.scss";

// Images
import logo from "../../Images/Logo_dark.svg";

const HeaderItems = [
  <HashLink smooth to="/#home">
    Home
  </HashLink>,
  <HashLink smooth to="/#uberuns">
    Über Uns
  </HashLink>,
  <HashLink smooth to="/#staff">
    Unsere Ärzte
  </HashLink>,
  <HashLink smooth to="/#behandlungen">
    Behandlungen
  </HashLink>,
  <HashLink smooth to="/#contact">
    Kontakt
  </HashLink>,
];

const OnlineBeratungButton = (props) => (
  <Button {...props} onClick={() => window.tidioChatApi.open()}>
    Online Beratung
  </Button>
);

const LanguageSelectButton = (props) => <LanguageSelectBox {...props} />;

function Header() {
  const screens = Grid.useBreakpoint();

  const headerRef = useRef();

  const toggleHeader = () => {
    headerRef.current.style.display =
      headerRef.current.style.display === "block" ? "none" : "block";
  };

  return (
    <>
      <div className="grid-cols-12 grid w-full">
        <div className="col-span-10 col-start-2">
          <nav className={`${styles.navbar} w-full bg-white`}>
            <NavLink to="/" className="h-full">
              <img
                src={logo}
                className={`${styles.logo} my-auto`}
                alt="Globally Dent Logo"
              />
            </NavLink>
            <div className={`${styles.navbarActionsSmallScreen} items-center`}>
              <LanguageSelectButton size={screens.xs ? "small" : "large"} />
              <Button
                type="link"
                className={`${styles.toggleButton} flex items-center justify-center bg-primary-1 text-white`}
                onClick={toggleHeader}
                icon={<MenuOutlined />}
              />
            </div>
            <div ref={headerRef} className={`${styles.navbarLinks} ml-auto`}>
              <ul>
                {HeaderItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={`${styles.navbarActionsMediumScreen}`}>
              <OnlineBeratungButton
                className={`${styles.beratung} app-btn app-btn-primary`}
                size={screens.xs ? "small" : "large"}
              />
              <LanguageSelectButton size={screens.xs ? "small" : "large"} />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
