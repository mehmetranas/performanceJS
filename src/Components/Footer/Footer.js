import React from "react";

// Components
import FooterSection1 from "./FooterSection1";
import FooterSection2 from "./FooterSection2";
import FooterSection3 from "./FooterSection3";

//  Images
import logo from "../../Images/logo-2.svg";

function Footer() {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-10 col-start-2">
          <div className="grid-cols-4 grid">
            <div className="col-span-1 logo hidden md:block">
              <img src={logo} className="" alt="" />
            </div>
            <div className="col-span-1 hidden md:block">
              <FooterSection1 />
            </div>
            <div className="col-span-1 hidden md:block">
              <FooterSection2 />
            </div>
            <div className="col-span-4 md:col-span-1">
              <FooterSection3 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
