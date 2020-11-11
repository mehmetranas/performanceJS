import React from "react";

function LocationMap({ iframe }) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: iframe }}></div>
    </div>
  );
}

export default LocationMap;
