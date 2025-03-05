"use client";

import { Grid2, Typography } from "@mui/material";
import Back from "../components/Inicio/Back";
import { useDispatch, useSelector } from "react-redux";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { useEffect } from "react";
import {
  fetchProyectos,
  filterProyectoByText,
} from "../services/proyectos/proyectoService";
import SearchBar from "../components/Inicio/SearchBar";
import TablaProyectos from "../components/Proyectos/TablaProyectos";

const Proyectos = () => {
  const dispatch = useDispatch();
  const { proyectos, proyectosFiltrado } = useSelector(
    (state) => state.proyectoReducer
  );

  useEffect(() => {
    if (!proyectos || !proyectos.length) {
      dispatch(fetchProyectos());
    }
  }, [proyectos]);

  const handleFilterProyecto = (texto) => {
    dispatch(filterProyectoByText(texto));
  };

  return (
    <Grid2 container sx={{ p: 2 }} spacing={2}>
      <Grid2 size={12}>
        <Back to="/inicio" label="Volver a Inicio" />
      </Grid2>
      <Grid2 size={12}>
        {Object.keys(proyectos).length ? (
          <Typography variant="h4">
            Actualmente cuentas con {proyectos.length - 1}{" "}
            {proyectos.length - 1 > 1 ? "proyectos" : "proyecto"}.
          </Typography>
        ) : (
          <LoadingSkeleton />
        )}
      </Grid2>
      <Grid2 size={12} sx={{ mt: 2 }}>
        <Grid2 container>
          <Grid2 size={4}>
            <SearchBar onChangeText={handleFilterProyecto} />
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 size={12}>
        <TablaProyectos />
      </Grid2>
    </Grid2>
  );
};

export default Proyectos;
