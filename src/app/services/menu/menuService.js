import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import TransferWithinAStationRoundedIcon from "@mui/icons-material/TransferWithinAStationRounded";
//
import { setMenuList } from "@/app/redux/slices/menuSlice";

export const fetchMenu = () => async (dispatch, getState) => {
  const menuItems = [
    {
      id: 1,
      label: "Inicio",
      icono: <AppsRoundedIcon />,
      link: "",
    },
    {
      id: 2,
      label: "Mis Propiedades",
      icono: <ApartmentRoundedIcon />,
      link: "",
    },
    {
      id: 2,
      label: "Próximas Salidas",
      icono: <TransferWithinAStationRoundedIcon />,
      link: "",
    },
  ];

  dispatch(setMenuList(menuItems));
};
