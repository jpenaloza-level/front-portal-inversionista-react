"use client";

import Back from "@/app/components/Inicio/Back";
import LoadingSkeleton from "@/app/components/LoadingSkeleton";
import CardDetailsContent from "@/app/components/Productos/CardDetailsContent";
import HeaderCard from "@/app/components/Productos/HeaderCard";
import CardInfoProyecto from "@/app/components/Proyectos/CardInfoProyecto";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import WarehouseRoundedIcon from "@mui/icons-material/WarehouseRounded";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { fetchProductos } from "@/app/services/productos/productoService";
import { fetchProyecto } from "@/app/services/proyectos/proyectoService";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardMainContent from "@/app/components/Productos/CardMainContent";
import { capitalizeFirstLetter } from "@/app/utils";
import MenuProyectosBtn from "@/app/components/Proyectos/MenuProyectosBtn";
import { AdvancedMarker, Map, Pin } from "@vis.gl/react-google-maps";
import Image from "next/image";
import _ from "lodash";
import Mapbox from "../../../components/Mapas/Mapbox/Map";

const ProyectoDetalle = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const proyectoInfo = useSelector(
    (state) => state.proyectoReducer.proyectoInfo
  );
  const productos = useSelector((state) => state.productoReducer.productos);
  const theme = useTheme();

  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    dispatch(fetchProyecto(id));
    dispatch(fetchProductos("", id));
  }, [id]);

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

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  if (!proyectoInfo) {
    return <LoadingSkeleton />;
  }

  if (!Object.keys(proyectoInfo).length) {
    return <p>Proyecto no encontrado</p>;
  }

  return (
    <Grid2 container sx={{ p: 2 }} spacing={2}>
      <Dialog
        fullWidth={true}
        maxWidth="xl"
        open={isOpenModal}
        onClose={handleCloseModal}
        aria-labelledby="ubicacion-del-proyecto"
      >
        <DialogTitle>Ubicación del proyecto {proyectoInfo.nombre}</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleCloseModal}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseRoundedIcon />
        </IconButton>
        <DialogContent>
          <Grid2 container>
            <Grid2 size={12}>
              <div style={{ height: 700 }}>
                <Mapbox lat="-33.4079771" lng="-70.5741556" />

                {/*  <Map
                  mapId="map-proyecto"
                  defaultZoom={17}
                  defaultCenter={{ lat: -33.4080113, lng: -70.5741263 }}
                  fullscreenControl={false}
                >
                  <AdvancedMarker
                    key={1}
                    position={{ lat: -33.4080113, lng: -70.5741263 }}
                    title="Proyeto Level"
                  >
                    <Box
                      sx={{
                        bgcolor: "#ffffff",
                        p: 1,
                        borderRadius: 6,
                        border: "solid 0.5px #cccccc",
                      }}
                    >
                      <Image
                        src="/logo_only.svg"
                        style={{ backgroundColor: "#ffffff" }}
                        width={40}
                        height={40}
                        alt="Imagen fondo banner"
                      />
                    </Box>
                  </AdvancedMarker>
                </Map>*/}
              </div>
            </Grid2>
          </Grid2>
        </DialogContent>
      </Dialog>
      <Grid2 size={12}>
        <Back to="/proyectos" label="Volver a listado de proyectos" />
      </Grid2>
      <Grid2 size={12} sx={{ mt: 4 }}>
        <MenuProyectosBtn />
      </Grid2>
      <Grid2 size={12}>
        <CardInfoProyecto
          onVerUbicacion={handleOpenModal}
          proyecto={proyectoInfo}
        />
      </Grid2>
      <Grid2 size={12} sx={{ mt: 4 }}>
        <Grid2 container spacing={2}>
          {!Object.keys(productos).length ? (
            <LoadingSkeleton />
          ) : (
            Object.keys(productos).map((producto, index) => (
              <Grid2 size={{ md: 4, xs: 12 }} key={index}>
                {renderCardProducto(producto, productos[producto])}
              </Grid2>
            ))
          )}
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default ProyectoDetalle;
