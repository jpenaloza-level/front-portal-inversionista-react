"use client";

import {
  Button,
  Chip,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import moment from "moment";
import Banner from "../components/Inicio/Banner";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProyectos } from "../services/proyectos/proyectoService";
import _ from "lodash";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { setSelectedProyecto } from "../redux/slices/proyectoSlice";
import HeaderCard from "../components/Productos/HeaderCard";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import CardMainContent from "../components/Productos/CardMainContent";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import WarehouseRoundedIcon from "@mui/icons-material/WarehouseRounded";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import CardDetailsContent from "../components/Productos/CardDetailsContent";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import {
  downloadProductosExcel,
  fetchProductos,
} from "../services/productos/productoService";
import TablaProyectos from "../components/Proyectos/TablaProyectos";
import { capitalizeFirstLetter } from "../utils";

const Inicio = () => {
  const dispatch = useDispatch();
  const getUltimaActualizacion = () => {
    return `${moment().date()}/${(moment().month() + 1).toString().padStart(2, "0")}/${moment().year()}`;
  };

  const { proyectos, selectedProyecto } = useSelector(
    (state) => state.proyectoReducer
  );
  const { productos, isDownloading } = useSelector(
    (state) => state.productoReducer
  );

  useEffect(() => {
    dispatch(fetchProyectos());
    dispatch(fetchProductos());
  }, []);

  const handleChangeProyecto = (idProyecto) => {
    dispatch(setSelectedProyecto(_.find(proyectos, { id: idProyecto })));
    dispatch(fetchProductos(0, idProyecto));
  };

  const renderCardProducto = (productName, data) => {
    let color = "";
    let icon = undefined;
    switch (productName) {
      case "departamentos":
        color = "#10398b";
        icon = <ApartmentRoundedIcon sx={{ color, fontSize: 60 }} />;
        break;
      case "bodegas":
        color = "#0c54e5";
        icon = <WarehouseRoundedIcon sx={{ color, fontSize: 60 }} />;
        break;
      case "estacionamientos":
        color = "#ff9100";
        icon = <DirectionsCarRoundedIcon sx={{ color, fontSize: 60 }} />;
        break;
      default:
        color = "#10398b";
        icon = <ApartmentRoundedIcon sx={{ color, fontSize: 60 }} />;
        break;
    }

    const totalUnidad =
      data.contrato + data.reservado + data.disponible + data.bloqueado;

    return (
      <HeaderCard
        value={data?.ocupacion || 0}
        label={`Ocupación ${capitalizeFirstLetter(productName)}`}
        bgcolor={color}
        key={productName}
      >
        <CardMainContent
          index={5}
          label1="Contratos"
          value1={data?.contrato || 0}
          label2="Reservados"
          value2={data?.reservado || 0}
          color={color}
          icon={icon}
        >
          <CardDetailsContent
            index={4}
            label="Disponibles"
            value={data?.disponible || 0}
            color={color}
            icon={<VerifiedRoundedIcon sx={{ fontSize: 34, color }} />}
          />
          <CardDetailsContent
            index={3}
            label="Bloqueados"
            value={data?.bloqueado || 0}
            color={color}
            icon={<LockRoundedIcon sx={{ fontSize: 34, color }} />}
          />
          <CardDetailsContent
            index={2}
            label={capitalizeFirstLetter(productName)}
            value={totalUnidad}
            color={color}
            icon={<HandshakeRoundedIcon sx={{ fontSize: 34, color }} />}
          />
        </CardMainContent>
      </HeaderCard>
    );
  };

  const handleDescargaExcelProductos = () => {
    dispatch(downloadProductosExcel());
  };

  return (
    <Grid2 container spacing={2} sx={{ p: 2 }} alignItems="center">
      <Grid2 size={12} sx={{ textAlign: "right" }}>
        <Typography variant="subtitle1">
          Última Actualización <Chip label={getUltimaActualizacion()} />
        </Typography>
      </Grid2>
      <Grid2 size={12}>
        <Banner />
      </Grid2>
      <Grid2 size={9}>
        <Grid2 container>
          <Grid2 size={4}>
            {proyectos.length ? (
              <FormControl fullWidth>
                <InputLabel id="select-proyecto-label">Proyecto</InputLabel>
                <Select
                  labelId="select-proyecto-label"
                  id="select-proyecto"
                  value={selectedProyecto.id}
                  label="Proyecto"
                  onChange={({ target }) => handleChangeProyecto(target.value)}
                >
                  {proyectos?.map((proyecto, index) => (
                    <MenuItem key={index} value={proyecto.id}>
                      {proyecto.nameProject}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <LoadingSkeleton />
            )}
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 size={3}>
        <Button
          color="disabled"
          variant="contained"
          fullWidth
          sx={{ bgcolor: "#ffffff", color: "#000000" }}
          endIcon={<DownloadRoundedIcon />}
          onClick={() => handleDescargaExcelProductos()}
          loading={isDownloading}
        >
          Exportar a Excel
        </Button>
      </Grid2>
      <Grid2 size={12}>
        <Typography
          sx={{ color: "#103A8B", fontWeight: "bold" }}
          variant="h5"
        >{`Administración de ${selectedProyecto?.nameProject || "totales"}`}</Typography>
      </Grid2>

      {!Object.keys(productos).length ? (
        <LoadingSkeleton />
      ) : (
        Object.keys(productos).map((producto, index) => (
          <Grid2 size={4} key={index}>
            {renderCardProducto(producto, productos[producto])}
          </Grid2>
        ))
      )}
      <Grid2 size={12} sx={{ mt: 4 }}>
        <TablaProyectos />
      </Grid2>
    </Grid2>
  );
};

export default Inicio;
