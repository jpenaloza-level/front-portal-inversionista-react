import { Grid2, Paper, Typography } from "@mui/material";

const CardDetailsContent = ({ label, value, index, color, icon }) => {
  return (
    <Paper elevation={3} sx={{ borderRadius: 4, zIndex: index }}>
      <Grid2
        container
        alignContent="center"
        alignItems="center"
        sx={{ height: 60, p: 1, mb: 1 }}
      >
        <Grid2 size={10}>
          <Grid2 container alignItems="center">
            <Grid2>{icon}</Grid2>
            <Grid2>
              <Typography variant="subtitle1">{label}</Typography>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 size={2} sx={{ textAlign: "center" }}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", fontSize: 20 }}
          >
            {value}
          </Typography>
        </Grid2>
      </Grid2>
    </Paper>
  );
};

export default CardDetailsContent;
