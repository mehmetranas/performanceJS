import React from "react";

// Components
import Description from "./Description";

// Styles
import styles from "./HealthRoute.module.scss";

// Images
import image from "../../Images/HealthRoute.svg";

// providers
import { useLanguageContext } from "../../languages-service/container/Langauge";

function HealthRouteLarge() {
  const { dictionary } = useLanguageContext();
  return (
    <>
      <div className="relative">
        <img src={image} alt="" className={styles.image} />
        <div className="absolute w-1/6" style={{ top: "0", left: "13%" }}>
          <Description
            title1={dictionary?.healthRoute.desc1Title1}
            title2={dictionary?.healthRoute.desc1Title1}
            text={dictionary?.healthRoute.desc1Text}
          />
        </div>
        <div className="absolute w-1/6" style={{ top: "0", right: "16%" }}>
          <Description
            title1={dictionary?.healthRoute.desc2Title1}
            title2={dictionary?.healthRoute.desc2Title2}
            text={dictionary?.healthRoute.desc2Text}
          />
        </div>
        <div className="absolute w-1/6" style={{ top: "42%", right: "53%" }}>
          <Description
            title1={dictionary?.healthRoute.desc3Title1}
            title2={dictionary?.healthRoute.desc3Title2}
            text={dictionary?.healthRoute.desc3Text}
          />
        </div>
        <div className="absolute w-1/6" style={{ top: "42%", right: "5%" }}>
          <Description
            title1={dictionary?.healthRoute.desc4Title1}
            title2={dictionary?.healthRoute.desc4Title2}
            text={dictionary?.healthRoute.desc4Text}
          />
        </div>
        <div className="absolute w-1/6" style={{ top: "85%", left: "14%" }}>
          <Description
            title1={dictionary?.healthRoute.desc5Title1}
            title2={dictionary?.healthRoute.desc5Title2}
            text={dictionary?.healthRoute.desc5Text}
          />
        </div>
        <div className="absolute w-1/6" style={{ top: "85%", right: "29%" }}>
          <Description
            title1={dictionary?.healthRoute.desc6Title1}
            title2={dictionary?.healthRoute.desc6Title2}
            text={dictionary?.healthRoute.desc6Text}
          />
        </div>
      </div>
    </>
  );
}

export default HealthRouteLarge;
