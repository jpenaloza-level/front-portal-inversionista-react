import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  proyectos: [],
  proyectosFiltrado: undefined,
  selectedProyecto: {},
  proyectoInfo: undefined,
};

export const proyectoSlice = createSlice({
  name: "proyectoSlice",
  initialState: INITIAL_STATE,
  reducers: {
    setProyectoList: (state, action) => {
      state.proyectos = action.payload;
    },
    setProycetoFiltrado: (state, action) => {
      state.proyectosFiltrado = action.payload;
    },
    setSelectedProyecto: (state, action) => {
      state.selectedProyecto = action.payload;
    },
    setProyectoInfo: (state, action) => {
      state.proyectoInfo = action.payload;
    },
  },
});

export const {
  setProyectoList,
  setProycetoFiltrado,
  setProyectoInfo,
  setSelectedProyecto,
} = proyectoSlice.actions;
export default proyectoSlice.reducer;
