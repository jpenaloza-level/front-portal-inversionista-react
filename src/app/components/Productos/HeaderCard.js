import { Paper, Grid2, Typography, Button } from "@mui/material";

const HeaderCard = ({ label, value, bgcolor, children }) => {
  return (
    <Grid2 container spacing={1}>
      <Grid2 size={12}>
        <Paper elevation={3} sx={{ bgcolor, height: 160, borderRadius: 4 }}>
          <Grid2
            container
            justifyContent="center"
            alignItems="center"
            sx={{ color: "#ffffff", height: "100%" }}
            className="card"
          >
            <Grid2 size={4} sx={{ textAlign: "right" }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", fontSize: 50 }}
              >
                {`${value}%`}
              </Typography>
            </Grid2>
            <Grid2 size={4} sx={{ textAlign: "left" }}>
              <Typography>{label}</Typography>
            </Grid2>
            <Grid2 size={12} sx={{ textAlign: "center" }}>
              <Grid2 container justifyContent="center" alignItems={"center"}>
                <Grid2 size={6}>
                  <Button variant="outlined" color="disabled">
                    Ver Detalle
                  </Button>
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
        </Paper>
      </Grid2>
      <Grid2 size={12}>{children}</Grid2>
    </Grid2>
  );
};

export default HeaderCard;
