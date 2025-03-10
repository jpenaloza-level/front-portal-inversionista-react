"use client";

import { Avatar, Button, Grid2, Tooltip, Typography } from "@mui/material";
import LeyendaOcupacion from "./LeyendaOcupacion";
import { useSelector } from "react-redux";
import LoadingSkeleton from "../LoadingSkeleton";
import MultiProgress from "react-multi-progress";
import { useRouter } from "next/navigation";

const TablaProyectos = () => {
  const proyectos = useSelector(
    (state) => state.proyectoReducer.proyectosFiltrado
  );

  const router = useRouter();

  if (!proyectos) {
    return <LoadingSkeleton />;
  }

  const getProgressColor = (estado) => {
    let color = "";
    switch (estado) {
      case "contrato":
        color = "#103A8B";
        break;
      case "reservado":
        color = "#4880FF";
        break;
      case "disponible":
        color = "#FF9000";
        break;
      case "obras":
        color = "#0AB44E";
        break;
      case "bloqueado":
        color = "#979797";
        break;
      default:
        color = "#000000";
        break;
    }
    return color;
  };

  const getMultiProgressValue = ({ statusProject }) => {
    const values = statusProject?.map((element) => {
      return {
        value: element.ocupacion,
        color: getProgressColor(element.estado),
        showPercentage: false,
        fontSize: 9,
        textColor: "white",
        estado: element.estado,
      };
    });
    return values;
  };

  const CustomProgress = ({ children, element, ...rest }) => {
    return (
      <Tooltip
        title={`${element.value}% ${element.estado}`}
        placement="top"
        arrow
        disableFocusListener
        followCursor
      >
        <div {...rest}>{children}</div>
      </Tooltip>
    );
  };

  const handleGoToProject = (id) => {
    router.push(`/proyectos/resumen/${id}`);
  };

  return (
    <Grid2 container>
      <Grid2
        size={{ md: 9, xs: 12 }}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <LeyendaOcupacion />
      </Grid2>
      <Grid2 size={{ md: 3, xs: 12 }}>
        <Button
          sx={{ bgcolor: "#ffffff", color: "#000000" }}
          variant="contained"
          fullWidth
        >
          Ver todas mis unidades
        </Button>
      </Grid2>
      <Grid2
        size={12}
        sx={{
          bgcolor: "#ffffff",
          mt: 2,
          p: 1,
          borderRadius: 4,
          fontWeight: "bold",
        }}
      >
        <Grid2 container>
          <Grid2 size={{ md: 3, xs: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Nombre del Proyecto
            </Typography>
          </Grid2>
          <Grid2 size={{ md: 2, xs: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Dirección
            </Typography>
          </Grid2>
          <Grid2 size={{ md: 2, xs: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Comuna
            </Typography>
          </Grid2>
          <Grid2 size={{ md: 3 }} sx={{ display: { xs: "none", md: "block" } }}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              % Ocupación
            </Typography>
          </Grid2>
          <Grid2 size={{ md: 2, xs: 3 }}></Grid2>
        </Grid2>
      </Grid2>
      {proyectos.map(
        (proyecto, index) =>
          proyecto.id != 0 && (
            <Grid2
              key={index}
              size={12}
              sx={{
                bgcolor: "#ffffff",
                mt: 2,
                p: 1,
                borderRadius: 4,
                fontWeight: "bold",
              }}
            >
              <Grid2 container alignItems={"center"}>
                <Grid2 size={{ md: 3, xs: 3 }}>
                  <Grid2 container alignItems={"center"}>
                    <Grid2
                      size={2}
                      sx={{ display: { xs: "none", md: "block" } }}
                    >
                      <Avatar
                        alt={`Imagen del proyecto ${proyecto.nameProject}`}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5SMwOlLZTGcnPAZTMJEPQsmjtWCf2hobV0w&s"
                      />
                    </Grid2>
                    <Grid2 size={{ md: 10, xs: 12 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: "bold" }}
                      >
                        {proyecto.nameProject}
                      </Typography>
                    </Grid2>
                  </Grid2>
                </Grid2>
                <Grid2 size={{ md: 2, xs: 3 }}>
                  <Typography variant="subtitle2">
                    {proyecto.directionProject}
                  </Typography>
                </Grid2>
                <Grid2 size={{ md: 2, xs: 3 }}>
                  <Typography variant="subtitle2">
                    {proyecto.comunaProject}
                  </Typography>
                </Grid2>
                <Grid2
                  size={{ md: 3 }}
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  <MultiProgress
                    elements={getMultiProgressValue(proyecto)}
                    component={CustomProgress}
                    height={20}
                  />
                </Grid2>
                <Grid2 size={{ md: 2, xs: 3 }} sx={{ textAlign: "center" }}>
                  <Button
                    color="primary"
                    variant="contained"
                    sx={{ color: "#ffffff" }}
                    onClick={() => handleGoToProject(proyecto.id)}
                  >
                    Ver Proyecto
                  </Button>
                </Grid2>
              </Grid2>
            </Grid2>
          )
      )}
    </Grid2>
  );
};

export default TablaProyectos;
