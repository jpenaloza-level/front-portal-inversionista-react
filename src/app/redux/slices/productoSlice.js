import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  productos: {},
  isDownloading: false,
};

export const productoSlice = createSlice({
  name: "productoSlice",
  initialState: INITIAL_STATE,
  reducers: {
    setProductoList: (state, action) => {
      state.productos = action.payload;
    },
    setIsDownloading: (state, action) => {
      state.isDownloading = action.payload;
    },
  },
});

export const { setProductoList, setIsDownloading } = productoSlice.actions;
export default productoSlice.reducer;
