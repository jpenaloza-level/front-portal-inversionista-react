import { Avatar, Grid2, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import LoadingSkeleton from "../LoadingSkeleton";

const AccountWidget = () => {
  const userData = useSelector((state) => state.accountReducer.userData);
  const keycloakInstance = useSelector(
    (state) => state.accountReducer.keycloak
  );

  const handleLogOut = () => {
    if (keycloakInstance) {
      console.log("Cerrando sesion");
      keycloakInstance.logout();
      console.log(keycloakInstance.endpoints);
    }
  };

  if (!keycloakInstance) {
    return <LoadingSkeleton />;
  }

  return (
    <Grid2
      container
      spacing={1}
      alignItems={"center"}
      justifyContent={"right"}
      sx={{ p: 1, width: "100%" }}
    >
      <Grid2
        size={{ md: 2 }}
        sx={{ m: 0, p: 0, display: { xs: "none", md: "block" } }}
      >
        <Avatar src="https://www.shutterstock.com/image-photo/city-pride-man-portrait-travel-260nw-2539840129.jpg" />
      </Grid2>
      <Grid2 size={{ md: 10, xs: 12 }}>
        <Typography
          sx={{ m: 0, p: 0 }}
          variant="subtitle2"
          gutterBottom={false}
        >
          {userData?.name || "Invitado"}
        </Typography>
        {/* <Typography
          sx={{ m: 0, p: 0 }}
          gutterBottom={false}
          variant="caption"
          component="p"
        >
          Perfil
        </Typography> */}
        <Typography
          sx={{ m: 0, p: 0, cursor: "pointer" }}
          variant="caption"
          component="p"
          onClick={() => handleLogOut()}
        >
          Cerrar Sesión
        </Typography>
      </Grid2>
    </Grid2>
  );
};

export default AccountWidget;
