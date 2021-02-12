import React, { useEffect } from "react";
import { Select } from "antd";

// Images
import GlobalIcon from "../../Images/Global.svg";

// provider
import { useLanguageContext } from "../../languages-service/container/Langauge";
import { languageOptions } from "../../languages-service/languages";

function LanguageSelectBox() {
  const { userLanguage, userLanguageChange } = useLanguageContext();

  // set selected language by calling context method
  const handleLanguageChange = (value) => userLanguageChange(value, true);

  useEffect(() => {
    let defaultLanguage = window.localStorage.getItem("rcml-lang");
    if (!defaultLanguage) {
      defaultLanguage = window.navigator.language.substring(0, 2);
    }
    userLanguageChange(defaultLanguage);
  }, [userLanguageChange]);

  return (
    <>
      <div className="md:px-5 flex items-center">
        <img src={GlobalIcon} alt="Select Your Language" />
        <Select
          onChange={handleLanguageChange}
          value={userLanguage}
          bordered={false}
          size="small"
        >
          {Object.entries(languageOptions).map(([id, country]) => (
            <Select.Option key={id} value={id}>
              {country.name}
            </Select.Option>
          ))}
        </Select>
      </div>
    </>
  );
}

export default LanguageSelectBox;
