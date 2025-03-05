"use client";

import { useEffect, useState } from "react";
import Keycloak from "keycloak-js";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { setKeycloak, setUserData } from "./redux/slices/accountSlice";

export default function Home({ children }) {
  const [_keycloak, _setKeycloak] = useState(null);
  const dispatch = useDispatch();
  const handleSesion = (kcInstance) => {
    dispatch(setUserData(kcInstance.tokenParsed));
    dispatch(setKeycloak(kcInstance));
  };

  useEffect(() => {
    const initKeycloak = async () => {
      const keycloakInstance = new Keycloak({
        url: process.env.NEXT_PUBLIC_REACT_APP_KC_HOST,
        realm: process.env.NEXT_PUBLIC_REACT_APP_KC_REALM,
        clientId: process.env.NEXT_PUBLIC_REACT_APP_KC_CLIENT_ID,
      });
      try {
        await keycloakInstance.init({ onLoad: "login-required" });
        console.log(keycloakInstance);
        _setKeycloak(keycloakInstance);
        handleSesion(keycloakInstance);
      } catch (error) {
        console.log(error);
      }
    };

    initKeycloak();
  }, []);

  if (_keycloak?.authenticated) {
    return children;
  }

  return null;
}
