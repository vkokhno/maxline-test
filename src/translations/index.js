import React from "react";
import { FormattedMessage } from "react-intl";

import ru from "./ru-ru";
import en from "./en-us";

export const translate = (id) => <FormattedMessage id={id} />;

export default {
  "ru-ru": ru,
  "en-us": en,
};
