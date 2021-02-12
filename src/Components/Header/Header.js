import React, { useRef, useMemo } from "react";
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

// provider
import { useLanguageContext } from "../../languages-service/container/Langauge";

const OnlineBeratungButton = (props) => (
  <Button {...props} onClick={() => window.tidioChatApi.open()}>
    {props.title}
  </Button>
);

const LanguageSelectButton = (props) => <LanguageSelectBox {...props} />;

function Header() {
  const { dictionary } = useLanguageContext();
  const screens = Grid.useBreakpoint();

  const headerRef = useRef();

  const HeaderItems = useMemo(() => {
    return [
      <HashLink smooth to="/#home">
        {dictionary?.appShared.home}
      </HashLink>,
      <HashLink smooth to="/#uberuns">
        {dictionary?.appShared.aboutUs}
      </HashLink>,
      <HashLink smooth to="/#staff">
        {dictionary?.appShared.staff}
      </HashLink>,
      <HashLink smooth to="/#behandlungen">
        {dictionary?.appShared.treatments}
      </HashLink>,
      <HashLink smooth to="/#contact">
        {dictionary?.appShared.contact}
      </HashLink>,
    ];
  }, []);

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
                title={dictionary?.appShared.onlineReservation}
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
