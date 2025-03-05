import { Grid2, Typography } from "@mui/material";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";

const LeyendaOcupacion = () => {
  return (
    <Grid2 container spacing={1}>
      <Grid2>
        <Typography variant="body2">
          <CircleRoundedIcon sx={{ color: "#103A8B" }} /> % Contratos
        </Typography>
      </Grid2>
      <Grid2>
        <Typography variant="body2">
          <CircleRoundedIcon sx={{ color: "#4880FF" }} /> % Reservas Pagadas
        </Typography>
      </Grid2>
      <Grid2>
        <Typography variant="body2">
          <CircleRoundedIcon sx={{ color: "#FF9000" }} /> % Disponible
        </Typography>
      </Grid2>
      <Grid2>
        <Typography variant="body2">
          <CircleRoundedIcon sx={{ color: "#0AB44E" }} /> % En Obras
        </Typography>
      </Grid2>
      <Grid2>
        <Typography variant="body2">
          <CircleRoundedIcon sx={{ color: "#979797" }} /> % Bloqueadas
        </Typography>
      </Grid2>
    </Grid2>
  );
};

export default LeyendaOcupacion;
