import React, { useRef } from "react";
import { Button, Select, Grid } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

//Components
import { LanguageSelectBox } from "../../Components";

// Styles
import styles from "./Header.module.scss";

// Images
import logo from "../../Images/Logo_dark.svg";

const HeaderItems = [
  <NavLink to="/home" activeClassName={styles.selected}>
    Home
  </NavLink>,
  <NavLink to="/uber" activeClassName={styles.selected}>
    Über Uns
  </NavLink>,
  <NavLink to="/behandlungen" activeClassName={styles.selected}>
    Behandlungen
  </NavLink>,
  <NavLink to="/gallery" activeClassName={styles.selected}>
    Galerie
  </NavLink>,
  <NavLink to="/contact" activeClassName={styles.selected}>
    Kontakt
  </NavLink>,
];

const OnlineBeratungButton = (props) => (
  <Button {...props}>Online Beratung</Button>
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
            <NavLink to="/home">
              <img
                src={logo}
                className={`${styles.logo} my-auto`}
                alt="Vefa Dent Logo"
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
