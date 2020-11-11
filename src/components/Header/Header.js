import React from "react";

//Components
import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

// Styles
import "./Header.scss";

// Images
import logo from "../../logo.svg";

function Header() {
  return (
    <>
      <div className="grid-cols-12 grid w-full">
        <div className="col-span-10 col-start-2">
          <nav className="navbar w-full">
            <img src={logo} className="logo" />
            <Button
              type="link"
              shape="circle"
              className="toggle-button"
              icon={<MenuOutlined />}
            />
            <div className="navbar-links ml-auto">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Über Uns</a>
                </li>
                <li>
                  <a href="#">Unsere Ärzte</a>
                </li>
                <li>
                  <a href="#">Behandlungen</a>
                </li>
                <li>
                  <a href="#">Galerie</a>
                </li>
                <li>
                  <a href="#">Kontakt</a>
                </li>
              </ul>
            </div>
            <Button size={"large"} className="beratung">
              Online Beratung
            </Button>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
