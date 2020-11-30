import React from "react";

// Components
import { LocationMap } from "../index";
import AddressContent from "./AddressContent";

const clinique1 = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.056447241773!2d29.081480415420124!3d41.02402097929922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac85cf87321cf%3A0xf9275f6a859ff96f!2zVmVmYWRlbnQgMiBBxJ_EsXogdmUgRGnFnyBTYcSfbMSxxJ_EsSBQb2xpa2xpbmnEn2k!5e0!3m2!1str!2str!4v1605079197786!5m2!1str!2str" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
const clinique2 = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.096669051665!2d29.10468701542009!3d41.023140979299264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac8ef7912d74b%3A0x1769fbd79d4b48fc!2zVmVmYWRlbnQgQcSfxLF6IHZlIERpxZ8gU2HEn2zEscSfxLEgUG9saWtsaW5pxJ9p!5e0!3m2!1str!2str!4v1605079896043!5m2!1str!2str" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
function CliniquesLocationMap() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="col-span-1 mt-20 pr-3 overflow-hidden grid-rows-2">
          <div className="col-row-1">
            <LocationMap iframe={clinique1} />
          </div>
          <div className="col-row-1 mt-4 flex justify-center">
            <AddressContent
              town="VEFADENT - ÇAMLICA"
              description="Namık Kemal Mahallesi Sütçü İmam Caddesi Savaş Sokak No:2/5"
            />
          </div>
        </div>
        <div className="col-span-1 mt-20 pl-3 overflow-hidden">
          <div className="col-row-1">
            <LocationMap iframe={clinique2} />
          </div>
          <div className="col-row-1 mt-4 flex justify-center">
            <AddressContent
              town="VEFADENT - ATAKENT"
              description="Atakent Mahallesi Mithat Paşa Caddesi No:74, Kat:1/A"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CliniquesLocationMap;
