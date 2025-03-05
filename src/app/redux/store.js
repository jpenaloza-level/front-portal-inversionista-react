import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./slices/menuSlice";
import proyectoSlice from "./slices/proyectoSlice";
import productoSlice from "./slices/productoSlice";
import accountSlice from "./slices/accountSlice";

export default configureStore({
  reducer: {
    accountReducer: accountSlice,
    menuReducer: menuSlice,
    proyectoReducer: proyectoSlice,
    productoReducer: productoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
