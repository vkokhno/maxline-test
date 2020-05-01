import React from "react";

const Item = ({ name, alpha3Code, currencies, flag }) => (
  <div
    className="sidebar__item item"
    style={{
      backgroundImage: `url(${flag})`,
    }}
  >
    <span className="item__name">{`${name} (${alpha3Code})`}</span>
    <span className="item__currencies">
      {`Валюты: (${currencies.map(({ code }) => code).join(", ")})`}
    </span>
  </div>
);

export default Item;
