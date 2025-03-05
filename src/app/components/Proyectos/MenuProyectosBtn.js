import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const { Grid2, Button } = require("@mui/material");

const MenuProyectosBtn = () => {
  const pathName = usePathname();

  const setCurrentBtn = (btnLabel) => {
    if (pathName.includes(btnLabel.toLowerCase())) {
      return "contained";
    } else {
      return "outlined";
    }
  };

  return (
    <Grid2 container spacing={2}>
      <Button variant={setCurrentBtn("resumen")} color="primary">
        Resumen
      </Button>
      {/*  <Button variant={setCurrentBtn("ocupacion")} color="primary">
        Ocupación
      </Button>
      <Button variant={setCurrentBtn("morosidad")} color="primary">
        Morosidad
      </Button>
      <Button variant={setCurrentBtn("contratos")} color="primary">
        Contratos
      </Button> */}
    </Grid2>
  );
};

export default MenuProyectosBtn;
