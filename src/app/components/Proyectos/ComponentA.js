"use client";

import { Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";

const ComponentA = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Se renderizo componente A");
  }, [count]);

  return (
    <>
      <Typography>Componente A</Typography>
      <Typography>{count}</Typography>
      <Button onClick={() => setCount((prev) => prev + 1)}>Contar</Button>
    </>
  );
};

export default ComponentA;
