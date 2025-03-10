"use client";

import * as React from "react";
import { Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import { NextAppProvider } from "@toolpad/core/nextjs";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import TransferWithinAStationRoundedIcon from "@mui/icons-material/TransferWithinAStationRounded";
import Image from "next/image";
import { Button, createTheme, Grid2, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import store from "./redux/store";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

//fonts
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/700.css";
import AccountWidget from "./components/Account/AccountWidget";
import SearchBar from "./components/Inicio/SearchBar";
import { APIProvider } from "@vis.gl/react-google-maps";
import Home from "./page";
import LoadingSkeleton from "./components/LoadingSkeleton";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const NAVIGATION = [
  {
    segment: "inicio",
    title: "Inicio",
    icon: <AppsRoundedIcon color="primary" />,
  },
  {
    segment: "proyectos",
    title: "Mis Propiedades",
    icon: <ApartmentRoundedIcon />,
  },
];

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
          borderRadius: 8,
        },
        outlinedPrimary: {
          color: "#ff8f00",
        },
        /* containedPrimary: {
          color: "#ff8f00",
        }, */
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: 14,
        },
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#ff8f00",
    },
    secondary: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: "Open Sans, Roboto",
  },
});

export default function RootLayout({ children }) {
  const renderSidebarFooter = () => {
    return (
      <Grid2
        container
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ mb: 1 }}
      >
        <Grid2 size={8}>
          {/* <AccountWidget /> */}
          <Button
            fullWidth
            variant=""
            color="disabled"
            startIcon={<SettingsRoundedIcon />}
          >
            Configuración
          </Button>
        </Grid2>
        <Grid2 size={8}>
          <Button
            fullWidth
            variant=""
            color="disabled"
            startIcon={<LogoutRoundedIcon />}
          >
            Logout
          </Button>
        </Grid2>
      </Grid2>
    );
  };

  const renderToolbarActions = () => {
    return (
      <Grid2 container sx={{ display: { xs: "none", md: "block" } }}>
        <Grid2 size={12}>
          <SearchBar
            onChangeText={(texto) =>
              console.log("Buscando desde navbar: ", texto)
            }
          />
        </Grid2>
      </Grid2>
    );
  };

  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          <APIProvider
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            onLoad={() => console.log("Se ha cargado la API de Google Maps.")}
          >
            <ThemeProvider theme={theme}>
              <React.Suspense fallback={<div>Loading...</div>}>
                <NextAppProvider
                  navigation={NAVIGATION}
                  theme={theme}
                  branding={{
                    homeUrl: "/",
                    logo: (
                      <Image
                        src="/logo-level.png"
                        height={80}
                        width={120}
                        alt="logo level"
                      />
                    ),
                    title: "",
                  }}
                >
                  <DashboardLayout
                    sidebarExpandedWidth={260}
                    sx={{ bgcolor: "#EDF2F7" }}
                    slots={{
                      sidebarFooter: () => renderSidebarFooter(),
                      toolbarActions: () => renderToolbarActions(),
                      toolbarAccount: () => <AccountWidget />,
                    }}
                  >
                    <Home>{children}</Home>
                  </DashboardLayout>
                </NextAppProvider>
              </React.Suspense>
            </ThemeProvider>
          </APIProvider>
        </Provider>
      </body>
    </html>
  );
}
