import { Divider, Grid2, Paper, Typography } from "@mui/material";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";

const CardMainContent = ({
  index,
  label1,
  value1,
  label2,
  value2,
  color,
  icon,
  children,
}) => {
  return (
    <>
      <Paper elevation={3} sx={{ borderRadius: 4, mb: 1, zIndex: index }}>
        <Grid2 container sx={{ p: 1 }}>
          <Grid2 size={10}>
            <Typography variant="subtitle1">{label1}</Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {value1}
            </Typography>
          </Grid2>
          <Grid2 size={1}>{icon}</Grid2>
          <Grid2 size={12} sx={{ mb: 2 }}>
            <Divider />
          </Grid2>
          <Grid2 size={10}>
            <Grid2 container alignItems="center">
              <Grid2>
                <RequestQuoteIcon sx={{ fontSize: 34, color }} />
              </Grid2>
              <Grid2>
                <Typography variant="subtitle1">{label2}</Typography>
              </Grid2>
            </Grid2>
          </Grid2>
          <Grid2 size={2} sx={{ textAlign: "center" }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", fontSize: 20 }}
            >
              {value2}
            </Typography>
          </Grid2>
        </Grid2>
      </Paper>
      {children}
    </>
  );
};

export default CardMainContent;
