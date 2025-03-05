import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  menuList: [],
};

export const menuSlice = createSlice({
  name: "menuSlice",
  initialState: INITIAL_STATE,
  reducers: {
    setMenuList: (state, action) => {
      state.menuList = action.payload;
    },
  },
});

export const { setMenuList } = menuSlice.actions;
export default menuSlice.reducer;
