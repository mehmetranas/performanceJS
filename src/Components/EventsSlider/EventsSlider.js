import React from "react";

// Components
import { SmallSlider, UnsereBehandlungenItem } from "../index";

// data
import { servicesItems } from "../../Data/data";

function EventsSlider() {
  const generateSliderItems = () => {
    return servicesItems?.map((serviceItem) => (
      <UnsereBehandlungenItem
        image={serviceItem.image}
        title={serviceItem.title}
        content={serviceItem.content}
      />
    ));
  };
  return <SmallSlider items={generateSliderItems()} />;
}

export default EventsSlider;
