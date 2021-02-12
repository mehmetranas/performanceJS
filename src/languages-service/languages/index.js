import de from "./de.json";
import en from "./en.json";

// Antd Locale
import deDe from "antd/lib/locale/de_DE";
import enUs from "antd/lib/locale/en_US";

// Flags
import germany from "../../Images/germany.svg";
import unitedKingdom from "../../Images/united-kingdom.svg";

export const dictionaryList = {
  de: {
    dictionary: de,
    antdLocale: deDe,
  },
  en: {
    dictionary: en,
    antdLocale: enUs,
  },
};

export const languageOptions = {
  de: {
    name: "DE",
    flag: germany,
  },
  en: {
    name: "EN",
    flag: unitedKingdom,
  },
};
