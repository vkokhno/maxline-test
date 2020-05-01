import React, { useState } from "react";
import { IntlProvider } from "react-intl";

import Sidebar from "../sidebar";
import Main from "../main";

import messages from "../../translations";

import "antd/dist/antd.css";
import "./styles.scss";

const App = () => {
  const [locale, setLocale] = useState(
    localStorage.getItem("locale") || "ru-ru"
  );

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="app">
        <Sidebar></Sidebar>
        <Main locale={locale} setLocale={setLocale}></Main>
      </div>
    </IntlProvider>
  );
};
export default App;
