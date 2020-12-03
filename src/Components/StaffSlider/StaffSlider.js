import React from "react";
import { useHistory } from "react-router-dom";

// Components
import { SmallSlider, StaffSliderItem } from "../index";

// Data
import { Staff } from "../../Data/data";

function StaffSlider() {
  const history = useHistory();
  const onItemClick = ({ props }) => {
    const { id } = props;
    history.push(`staff/${id}`);
  };

  const getSliderItems = () => {
    return Staff.map((item) => <StaffSliderItem {...item} />);
  };
  return (
    <>
      <SmallSlider items={getSliderItems()} callback={onItemClick} />
    </>
  );
}

export default StaffSlider;
