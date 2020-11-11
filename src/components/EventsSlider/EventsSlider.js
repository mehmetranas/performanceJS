import React from "react";

// Components
import { SmallSlider, UnsereBehandlungenItem } from "../index";

// Images
import dentBleaching from "../../Images/dent-bleaching.svg";
import dentBehandlung from "../../Images/dent-behandlung.svg";
import dentImplantate from "../../Images/dent-implantate.svg";
import dentOrthaopediatate from "../../Images/dent-orthopedia.svg";

function EventsSlider() {
  const generateSliderItems = () => {
    return [
      <UnsereBehandlungenItem
        image={dentBleaching}
        title="Zahn- Bleaching"
        content="Wenn unschöne Zahnverfärbungen das eigene ästhetische Empfinden trüben, kann ein Bleaching Abhilfe schaffen. Dabei können Sie einzelne Zähne, aber auch das ganze Gebiss bleichen lassen – ganz nach Bedarf."
      />,
      <UnsereBehandlungenItem
        image={dentImplantate}
        title="Zahn- Implantate"
        content="Implantate sind künstliche High-Tech-Zahnwurzeln aus wertvollem Material wie bspw. Titan, die im Kieferknochen platziert werden, um die Funktion und Ästhetik fehlender Zähne wiederherzustellen."
      />,
      <UnsereBehandlungenItem
        image={dentOrthaopediatate}
        title="Kiefer- orthopädie"
        content="Kieferorthopädische Behandlungen verhindern das Auftreten von Störungen im Zahn-Kiefer-Gesichtsbereich und stoppen und behandeln das Fortschreiten bestehender Störungen."
      />,
      <UnsereBehandlungenItem
        image={dentBehandlung}
        title="Wurzelkanal- behandlung"
        content="Diese Behandlungsmethode wird in Fällen angewendet, in denen der Nerv (Pulpa) im Zahn aufgrund von Karies oder Trauma beschädigt ist oder stirbt."
      />,
    ];
  };
  return <SmallSlider items={generateSliderItems()} />;
}

export default EventsSlider;
