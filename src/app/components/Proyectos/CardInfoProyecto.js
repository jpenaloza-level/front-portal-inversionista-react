"use client";

import { Button, Grid2, Paper, Typography } from "@mui/material";
import Image from "next/image";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { formatPrice } from "@/app/utils";

const CardInfoProyecto = ({ onVerUbicacion, proyecto }) => {
  return (
    <Paper sx={{ bgcolor: "white", p: 2, borderRadius: 6 }} elevation={3}>
      <Grid2 container>
        <Grid2 size={6}>
          <Image
            src="https://www.shutterstock.com/image-photo/new-modern-block-flats-green-600nw-2501530247.jpg"
            height={200}
            width={600}
            layout="responsive"
            style={{ borderRadius: 8 }}
            alt="Imagen del proyecto"
          />
        </Grid2>
        <Grid2 size={6}>
          <Grid2
            container
            justifyContent="center"
            sx={{ height: "100%", p: 4 }}
          >
            <Grid2 size={6}>
              <Grid2 container>
                <Grid2 size={12}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", fontSize: 16 }}
                  >
                    <ApartmentRoundedIcon />
                    {`Proyecto ${proyecto.nombre}`}
                  </Typography>
                </Grid2>
                <Grid2 size={12}>
                  <Typography variant="body2">
                    <LocationOnRoundedIcon sx={{ color: "red" }} />
                    {proyecto.direccion}
                  </Typography>
                </Grid2>
              </Grid2>
            </Grid2>
            <Grid2 size={6} sx={{ textAlign: "right" }}>
              <Grid2 container>
                <Grid2 size={12}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", fontSize: 16 }}
                  >
                    {`$${formatPrice(proyecto.precio)}`}
                  </Typography>
                </Grid2>
                <Grid2 size={12}>
                  <Typography variant="body2">Precio desde</Typography>
                </Grid2>
              </Grid2>
            </Grid2>
            <Grid2
              size={12}
              sx={{ border: "1px solid #cccccc", borderRadius: 6 }}
            >
              <Grid2 container spacing={2} sx={{ p: 2 }}>
                <Grid2 size={6}>
                  <Typography>
                    Año de contrucción: {proyecto.annoConstruccion}
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography>
                    Total Unidades: {proyecto.totalUnidades}
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography>
                    Cantidad de Pisos: {proyecto.pisosHasta}
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography>
                    Dormitorios: {proyecto.dormDesde} hasta {proyecto.dormHasta}
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography>
                    Departamentos por Piso: {proyecto.deptosPorPisoHasta}
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography>
                    Baños: {proyecto.banosDesde} hasta {proyecto.banosHasta}
                  </Typography>
                </Grid2>
              </Grid2>
            </Grid2>
            <Grid2 size={6} sx={{ mt: 2, p: 1 }}>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                sx={{ color: "primary.main" }}
                onClick={onVerUbicacion}
              >
                Ver Ubicación
              </Button>
            </Grid2>
            <Grid2 size={6} sx={{ mt: 2, p: 1 }}>
              <Button variant="contained" color="primary" fullWidth>
                Ver Unidades del Proyecto
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Paper>
  );
};

export default CardInfoProyecto;
