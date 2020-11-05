import { SET_CREDENTIALS, SET_TOKEN } from "../action/type";
let initialState = {
  token: "",
  credentialsA: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case SET_CREDENTIALS:
      state.credentialsA = action.payload;
      return { ...state };

    default:
      return state;
  }
};

export default reducer;
