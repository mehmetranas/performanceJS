import React from "react";

// Components
import Description from "./Description";

// Styles
import styles from "./HealthRoute.module.scss";

// Images
import image from "../../Images/HealthRoute.svg";

function HealthRouteLarge() {
  return (
    <>
      <div className="relative">
        <img src={image} alt="" className={styles.image} />
        <div className="absolute w-1/6" style={{ top: "0", left: "13%" }}>
          <Description
            title1="Vorort-"
            title2="Beratung"
            text="Lassen Sie sich in deutschen Partnerkliniken von den Ärzten Vorort beraten lassen. Somit kalkulieren wir die Kosten Ihrer Behandlung."
          />
        </div>
        <div className="absolute w-1/6" style={{ top: "0", right: "16%" }}>
          <Description
            title1="Termin"
            title2="Vereinbarung"
            text="Nach der Beratung vereinbaren wir einen passenden Termin mit Ihnen für Ihre perfekte Gesundheitsreise."
          />
        </div>
        <div className="absolute w-1/6" style={{ top: "42%", right: "48%" }}>
          <Description
            title1="Online"
            title2="Beratung"
            text="Oder lassen Sie sich online von unseren Ärzten beraten. Somit kalkulieren wir die Kosten Ihrer Behandlung."
          />
        </div>
        <div className="absolute w-1/6" style={{ top: "42%", right: "5%" }}>
          <Description
            title1="Transfer"
            title2="Planung"
            text="Wir planen den Transfer von den Flughäfen Ihrer Wahl bis in unsere Klinik."
          />
        </div>
        <div className="absolute w-1/6" style={{ top: "85%", left: "14%" }}>
          <Description
            title1="Zufriedenheit"
            title2="garantiert"
            text="Unsere Klinik hat über 9000 zufriedene Patienten. Also worauf warten Sie noch. Starten Sie Ihre Gesundheitsreise mit Vefadent; Ihrem Vertrauenspartner."
          />
        </div>
        <div className="absolute w-1/6" style={{ top: "85%", right: "29%" }}>
          <Description
            title1="Professionelle"
            title2="Behandlung"
            text="Lassen Sie sich unbesorgt von unseren erfahrenen Ärzten behandeln."
          />
        </div>
      </div>
    </>
  );
}

export default HealthRouteLarge;
