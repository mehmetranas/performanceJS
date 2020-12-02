import React from "react";

function HealthRouteSmallItem({ image, title1, title2, text }) {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className={`flex justify-center gap-3`}>
          <img
            src={image}
            alt="Vorort Beratung'
"
          />
        </div>
        <div className={`flex justify-center text-center text-5xl`}>
          <p className="py-0">
            {title1}
            <br />
            <strong>{title2}</strong>
          </p>
        </div>
        <div className={`flex justify-center px-4`}>
          <p className={`text-lg text-center`}>{text}</p>
        </div>
      </div>
    </>
  );
}

export default HealthRouteSmallItem;
