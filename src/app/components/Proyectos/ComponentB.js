"use client";

import { Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";

const ComponentB = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Se renderizo componente B");
  }, [count]);

  return (
    <>
      <Typography>Componente B</Typography>
      <Typography>{count}</Typography>
      <Button onClick={() => setCount((prev) => prev + 1)}>Contar</Button>
    </>
  );
};

export default ComponentB;
