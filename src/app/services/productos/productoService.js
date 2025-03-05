import {
  setIsDownloading,
  setProductoList,
} from "@/app/redux/slices/productoSlice";
import httpService from "../httpService";
import _ from "lodash";

export const fetchProductos =
  (tipoProducto, proyectoId) => async (dispatch, getState) => {
    const identificador = getState().accountReducer.userData.rut_empresa[0];

    dispatch(setProductoList({}));
    let urlParams = [];
    let url = `${process.env.NEXT_PUBLIC_API_BASE_ADDRESS}productos`;

    if (identificador != undefined && identificador != "") {
      urlParams.push(`identificador=${identificador}`);
    }
    if (tipoProducto != undefined && tipoProducto != "") {
      urlParams.push(`tipoProducto=${tipoProducto}`);
    }
    if (proyectoId != undefined && proyectoId != "") {
      urlParams.push(`proyectoId=${proyectoId}`);
    }

    if (urlParams.length) {
      url += `?${urlParams.join("&")}`;
    }

    const { data } = await httpService.get(url);
    dispatch(setProductoList(data));
  };

export const downloadProductosExcel =
  (idProyecto) => async (dispatch, getState) => {
    dispatch(setIsDownloading(true));
    const identificador = getState().accountReducer.userData.rut_empresa[0];
    let url = `${process.env.NEXT_PUBLIC_API_BASE_ADDRESS}productos/exportar-excel?identificador=${identificador}`;
    if (idProyecto) {
      url += `&proyectoId=${idProyecto}`;
    }

    try {
      const response = await httpService.get(url, {
        responseType: "blob",
      });

      const base64 = await response.data.text();
      // Convertimos base 64 a blob URL
      const byteCharacters = atob(base64);
      const byteNumbers = new Array(byteCharacters.length)
        .fill(0)
        .map((_, i) => byteCharacters.charCodeAt(i));
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      const urlBlob = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = urlBlob;
      link.setAttribute("download", "productos.xlsx"); // Nombre del archivo
      document.body.appendChild(link);
      link.click();
      link.remove();
      dispatch(setIsDownloading(false));
    } catch (error) {
      console.error("Error downloading the file", error);
      dispatch(setIsDownloading(false));
    }
  };
