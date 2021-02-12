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

// provider
import { useLanguageContext } from "../../languages-service/container/Langauge";

let StyledAntButton = styled(Button)`
  background: #36a0fc 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 20px #3f8cd15a;
  border-radius: 10px;
  opacity: 1;
  color: #fff;
  border: none;
`;

function HealthRouteSmall() {
  const { dictionary } = useLanguageContext();
  const [hideItems, setHideItems] = useState(true);
  return (
    <div className="flex flex-col gap-6">
      <div>
        <HealthRouteSmallItem
          image={vorortBeratung}
          title1={dictionary?.healthRoute.desc1Title1}
          title2={dictionary?.healthRoute.desc1Title1}
          text={dictionary?.healthRoute.desc1Text}
        />
      </div>
      <DashedDivider />
      <div>
        <HealthRouteSmallItem
          image={onlineBeratung}
          title1={dictionary?.healthRoute.desc2Title1}
          title2={dictionary?.healthRoute.desc2Title1}
          text={dictionary?.healthRoute.desc2Text}
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
            title1={dictionary?.healthRoute.desc3Title1}
            title2={dictionary?.healthRoute.desc3Title1}
            text={dictionary?.healthRoute.desc3Text}
          />
        </div>
        <DashedDivider />
        <div>
          <HealthRouteSmallItem
            image={transfer}
            title1={dictionary?.healthRoute.desc4Title1}
            title2={dictionary?.healthRoute.desc4Title1}
            text={dictionary?.healthRoute.desc4Text}
          />
        </div>
        <DashedDivider />
        <div>
          <HealthRouteSmallItem
            image={zufriedenheit}
            title1={dictionary?.healthRoute.desc5Title1}
            title2={dictionary?.healthRoute.desc5Title1}
            text={dictionary?.healthRoute.desc5Text}
          />
        </div>
        <DashedDivider />
        <div>
          <HealthRouteSmallItem
            image={behandlung}
            title1={dictionary?.healthRoute.desc6Title1}
            title2={dictionary?.healthRoute.desc6Title1}
            text={dictionary?.healthRoute.desc6Text}
          />
        </div>
      </div>
      <div className="h-14 mt-4">
        <StyledAntButton
          size="large"
          className={`h-full w-full border-none`}
          onClick={() => setHideItems((prev) => !prev)}
        >
          {dictionary?.healthRoute.moreLoad}
        </StyledAntButton>
      </div>
    </div>
  );
}

export default HealthRouteSmall;
