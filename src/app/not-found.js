"use client";

import { Grid2, Typography, useTheme } from "@mui/material";
import FloodRoundedIcon from "@mui/icons-material/FloodRounded";
import Link from "next/link";

const NotFoundPage = () => {
  const theme = useTheme();

  return (
    <Grid2
      container
      spacing={1}
      sx={{ pt: 10 }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid2 size={5} sx={{ textAlign: "right" }}>
        <FloodRoundedIcon sx={{ color: "#cccccc", fontSize: 200 }} />
      </Grid2>
      <Grid2 size={7}>
        <Typography variant="h3" sx={{ color: "#807e7e" }}>
          Página no encontrada
        </Typography>
        <Typography variant="body1" sx={{ color: "#807e7e" }}>
          Lo sentimos, no pudimos encontrar la página solicitada.{" "}
          <Link style={{ color: theme.palette.primary.main }} href="/inicio">
            Regresar a inicio
          </Link>
        </Typography>
      </Grid2>
    </Grid2>
  );
};
export default NotFoundPage;
