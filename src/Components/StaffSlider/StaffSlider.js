import React from "react";

// Components
import { SmallSlider, StaffSliderItem } from "../index";

// Images
import person1 from "../../Images/person1.png";
import person2 from "../../Images/person2.png";
import person3 from "../../Images/person3.png";
import person4 from "../../Images/person4.png";

function StaffSlider() {
  const getSliderItems = () => {
    return [
      <StaffSliderItem
        name="Dt. Şeyda Erzurumluoğlu"
        title="Verantwortlicher Manager"
        image={person1}
      />,
      <StaffSliderItem
        name="Uzm. Dr. Dt. Esra Ersöz Karagöz"
        title="Oral and Maxillofacial Surgery Specialist"
        image={person2}
      />,
      <StaffSliderItem
        name="Uzm. Dr. Dt. Burak Ak"
        title="Gum Diseases and Surgery"
        image={person3}
      />,
      <StaffSliderItem
        name="Dt. Aykut Öğreden"
        title="Dentist"
        image={person4}
      />,
    ];
  };
  return (
    <>
      <SmallSlider items={getSliderItems()} />
    </>
  );
}

export default StaffSlider;
