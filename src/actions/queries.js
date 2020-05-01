import { createAction } from "redux-actions";

const moduleName = "QUERIES";

export const addQuery = createAction(`${moduleName}/ADD_QUERY`);
