import { handleActions } from "redux-actions";

import { addQuery } from "../actions/queries";

const initialState = {
  data: [],
};

const queries = handleActions(
  {
    [addQuery.toString()]: (state, { payload }) => ({
      data: [...state.data, payload],
    }),
  },
  initialState
);

export default queries;
