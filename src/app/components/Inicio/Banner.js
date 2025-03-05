import { Grid2, Paper, Typography } from "@mui/material";
import Image from "next/image";

const Banner = () => {
  return (
    <Paper elevation={3} sx={{ borderRadius: 4 }}>
      <Grid2
        container
        sx={{
          p: 2,
          borderRadius: 4,
          color: "#ffffff",
          height: 200,
        }}
        className="banner-home"
      >
        <Grid2 size={12}>
          <Grid2 container alignItems="center">
            <Image
              src="logo_only_white.svg"
              width={40}
              height={40}
              alt="Imagen fondo banner"
            />
            <Typography sx={{ fontWeight: "bold", pl: 1, fontSize: 24 }}>
              LEVEL
            </Typography>
          </Grid2>
        </Grid2>
        <Grid2 size={12}>
          <Typography variant="h6">Portal Inversionista</Typography>
        </Grid2>
        <Grid2 size={12}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Resumen Mensual Febrero
          </Typography>
        </Grid2>
      </Grid2>
    </Paper>
  );
};

export default Banner;
