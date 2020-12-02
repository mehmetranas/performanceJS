import React, { useState } from "react";
import { Divider, Button } from "antd";
import styled from "@emotion/styled";

//Components
import HealthRouteSmallItem from "./HealthRouteSmallItem";
import DashedDivider from "./DashedDivider";

// styles
import styles from "./HealthRoute.module.scss";

// Images
import vorortBeratung from "../../Images/Vorort_Beratung.svg";
import onlineBeratung from "../../Images/Online_Beratung.svg";
import termin from "../../Images/Termin.svg";
import transfer from "../../Images/Reise_Plan.svg";
import zufriedenheit from "../../Images/Zufriedenheit.svg";
import behandlung from "../../Images/Behandlung.svg";

let StyledAntButton = styled(Button)`
  background: #36a0fc 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 20px #3f8cd15a;
  border-radius: 10px;
  opacity: 1;
  color: #fff;
  border: none;
`;

function HealthRouteSmall() {
  const [hideItems, setHideItems] = useState(true);
  return (
    <div className="flex flex-col gap-6">
      <div>
        <HealthRouteSmallItem
          image={vorortBeratung}
          title1="Vorort-"
          title2="Beratung"
          text="Lassen Sie sich in deutschen Partnerkliniken von den Ärzten Vorort beraten lassen. Somit kalkulieren wir die Kosten Ihrer Behandlung."
        />
      </div>
      <DashedDivider />
      <div>
        <HealthRouteSmallItem
          image={onlineBeratung}
          title1="Online"
          title2="Beratung"
          text="Oder lassen Sie sich online von unseren Ärzten beraten. Somit kalkulieren wir die Kosten Ihrer Behandlung."
        />
      </div>
      <DashedDivider />
      <div
        className={`${hideItems && styles.hidden} flex flex-col gap-6 ${
          styles.hiddenItems
        }`}
      >
        <div>
          <HealthRouteSmallItem
            image={termin}
            title1="Termin"
            title2="Vereinbaring"
            text="Lassen Sie sich in deutschen Partnerkliniken von den Ärzten Vorort beraten lassen. Somit kalkulieren wir die Kosten Ihrer Behandlung."
          />
        </div>
        <DashedDivider />
        <div>
          <HealthRouteSmallItem
            image={transfer}
            title1="Transfer"
            title2="Planung"
            text="Wir planen den Transfer von den Flughäfen Ihrer Wahl bis in unsere Klinik."
          />
        </div>
        <DashedDivider />
        <div>
          <HealthRouteSmallItem
            image={zufriedenheit}
            title1="Zufriedenheit"
            title2="garantiert"
            text="Unsere Klinik hat über 9000 zufriedene Patienten. Also worauf warten Sie noch. Starten Sie Ihre Gesundheitsreise mit Vefadent; Ihrem Vertrauenspartner."
          />
        </div>
        <DashedDivider />
        <div>
          <HealthRouteSmallItem
            image={behandlung}
            title1="Professionelle"
            title2="Behandlung"
            text="Lassen Sie sich unbesorgt von unseren erfahrenen Ärzten behandeln."
          />
        </div>
      </div>
      <div className="h-14 mt-4">
        <StyledAntButton
          size="large"
          className={`h-full w-full border-none`}
          onClick={() => setHideItems((prev) => !prev)}
        >
          Weitere Schritte ansehen
        </StyledAntButton>
      </div>
    </div>
  );
}

export default HealthRouteSmall;
