import { Grid, Grid2, Typography } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { useRouter } from "next/navigation";

const Back = ({ to, label }) => {
  const router = useRouter();

  const handleGoBack = () => {
    console.log("Going to: ", to);
    router.push(to);
  };

  return (
    <Grid2 container>
      <Grid2 size={12}>
        <Grid2
          container
          alignItems="center"
          onClick={handleGoBack}
          sx={{ cursor: "pointer" }}
        >
          <Grid2>
            <ArrowBackIosNewRoundedIcon color="primary" />
          </Grid2>
          <Grid2>
            <Typography>{label}</Typography>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default Back;
