import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  keycloak: null,
  userData: {},
};

export const accountSlice = createSlice({
  name: "accountSlice",
  initialState: INITIAL_STATE,
  reducers: {
    setKeycloak: (state, action) => {
      state.keycloak = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setKeycloak, setUserData } = accountSlice.actions;
export default accountSlice.reducer;
