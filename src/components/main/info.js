import React from "react";

import { translate } from "../../translations";

import "./styles.scss";

const Info = ({
  name,
  alpha3Code,
  region,
  capital,
  population,
  currencies,
  flag,
}) => (
  <li className="info">
    <h2 className="info__title">{translate("countyInformation")}</h2>
    <h3 className="info__name">
      {name} ({alpha3Code})
    </h3>
    <span className="info__region">
      {translate("region")} - {region}
    </span>
    <span className="info__capital">
      {translate("capital")} - {capital}
    </span>
    <span className="info__population">
      {translate("population")} - {population}
    </span>
    <span className="info__currency">
      {translate("currencies")}:{" "}
      {currencies.map((currency) => currency.code).join(", ")}
    </span>
    <img className="info__flag" src={flag} alt="flag" />
  </li>
);

export default Info;
