import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { injectIntl } from "react-intl";

import { Radio, Input } from "antd";
import Info from "./info";

import { addQuery } from "../../actions/queries";
import { translate } from "../../translations";

import "./styles.scss";

const Main = ({ locale, setLocale, intl }) => {
  const [radio, setRadio] = useState("fullText");
  const [countyInfos, setCountyInfos] = useState([]);
  const queries = useSelector((state) => state.queries);
  const dispath = useDispatch();

  const searchCountry = (value) => {
    const url = (() => {
      if (radio === "fullText") return `/name/${value}?fullText=true`;
      return `/${radio}/${value}`;
    })();

    const query = queries.data?.find((item) => item.url === url);

    if (query) return setCountyInfos(query.response);

    fetch(`https://restcountries.eu/rest/v2${url}`)
      .then((response) => {
        if (response.status !== 200) throw new Error("Not 200 response");
        return response.json();
      })
      .then((response) => {
        setCountyInfos(response);
        dispath(addQuery({ url, response }));
      })
      .catch((error) => console.error(error));
  };

  return (
    <main className="main">
      <Input
        className="main__search"
        placeholder={intl.formatMessage({ id: "search" })}
        onPressEnter={(event) => searchCountry(event.currentTarget.value)}
      />
      <Radio.Group
        className="main__radio"
        value={radio}
        onChange={(event) => setRadio(event.target.value)}
      >
        <Radio value="fullText">{translate("fullTitle")}</Radio>
        <Radio value="name">{translate("shortTitle")}</Radio>
        <Radio value="alpha">{translate("code")}</Radio>
        <Radio value="currency">{translate("currencies")}</Radio>
      </Radio.Group>
      <ul className="main__infos">
        {countyInfos.map((countyInfo) => (
          <Info {...countyInfo} key={countyInfo.name} />
        ))}
      </ul>
      <Radio.Group
        className="main__footer"
        defaultValue={locale}
        onChange={(event) => {
          localStorage.setItem("locale", event.target.value);
          setLocale(event.target.value);
        }}
      >
        <Radio.Button value="ru-ru">Русский</Radio.Button>
        <Radio.Button value="en-us">English</Radio.Button>
      </Radio.Group>
    </main>
  );
};

export default injectIntl(Main);
