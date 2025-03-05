const { Skeleton, CircularProgress, Grid2 } = require("@mui/material");

const LoadingSkeleton = () => {
  //return <Skeleton width="100%" variant="rounded" height={60}></Skeleton>;
  return (
    <Grid2 size={12} sx={{ textAlign: "center", mt: 4 }}>
      <CircularProgress />
    </Grid2>
  );
};

export default LoadingSkeleton;
