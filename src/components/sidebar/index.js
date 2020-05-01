import React, { useEffect, useState } from "react";
import { injectIntl } from "react-intl";

import { Input } from "antd";
import Item from "./item";

import { translate } from "../../translations";

import "./styles.scss";

const Sidebar = ({ intl }) => {
  const [countries, setCountries] = useState([]);
  const [fiteredCountries, setFilteredCounties] = useState([]);

  useEffect(() => {
    fetch(
      `https://restcountries.eu/rest/v2/all?fields=name;alpha3Code;currencies;flag`
    )
      .then((response) => {
        if (response.status !== 200) throw new Error("Not 200 response");
        return response.json();
      })
      .then((response) => {
        setCountries(response);
        setFilteredCounties(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <aside className="sidebar">
      <h2 className="sidebar__title">{translate("directory")}</h2>
      <Input
        className="sidebar__input"
        placeholder={intl.formatMessage({ id: "search" })}
        onChange={(value) => {
          setFilteredCounties(
            countries.filter(
              (country) =>
                country.name
                  .toLowerCase()
                  .indexOf(value.currentTarget.value.toLowerCase()) + 1
            )
          );
        }}
      />
      {fiteredCountries.map((county) => (
        <Item {...county} key={county.name} />
      ))}
    </aside>
  );
};

export default injectIntl(Sidebar);
