import {
  setProyectoList,
  setProycetoFiltrado,
  setSelectedProyecto,
  setProyectoInfo,
} from "@/app/redux/slices/proyectoSlice";
import httpService from "../httpService";
import _ from "lodash";

export const fetchProyectos = () => async (dispatch, getState) => {
  const identificador = getState().accountReducer.userData.rut_empresa[0];
  const url = `${process.env.NEXT_PUBLIC_API_BASE_ADDRESS}proyectos?identificador=${identificador}`;
  const { data } = await httpService.get(url);
  const itemsProyectos = [{ id: 0, nameProject: "Todos" }, ...data];
  dispatch(setProyectoList(itemsProyectos));
  dispatch(setProycetoFiltrado(itemsProyectos));
  dispatch(setSelectedProyecto(itemsProyectos[0]));
};

export const fetchProyecto = (idProyecto) => async (dispatch, getState) => {
  const identificador = getState().accountReducer.userData.rut_empresa[0];
  const url = `${process.env.NEXT_PUBLIC_API_BASE_ADDRESS}proyecto?idProyecto=${idProyecto}&rut=${identificador}`;
  const { data } = await httpService.get(url);
  if (Object.keys(data).length) {
    dispatch(setProyectoInfo(data));
  } else {
    dispatch(setProyectoInfo({}));
  }
};

export const filterProyectoByText = (texto) => async (dispatch, getState) => {
  const { proyectos } = getState().proyectoReducer;
  const proyectosFiltrado = proyectos.filter((proyecto) =>
    proyecto.nameProject.toLowerCase().includes(texto.toLowerCase())
  );
  dispatch(setProycetoFiltrado(proyectosFiltrado));
};
