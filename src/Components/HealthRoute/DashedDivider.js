import React from "react";
import { Divider } from "antd";

function DashedDivider(props) {
  return (
    <div className={`flex flex-col items-center gap-3 ${props.className}`}>
      <Divider
        type="vertical"
        className="h-3 w-1"
        style={{ borderColor: `#000`, borderWidth: "0 0 0 3px" }}
      />
      <Divider
        type="vertical"
        className="h-3 w-1"
        style={{ borderColor: `#000`, borderWidth: "0 0 0 3px" }}
      />
      <Divider
        type="vertical"
        className="h-3 w-1"
        style={{ borderColor: `#000`, borderWidth: "0 0 0 3px" }}
      />
    </div>
  );
}

export default DashedDivider;
