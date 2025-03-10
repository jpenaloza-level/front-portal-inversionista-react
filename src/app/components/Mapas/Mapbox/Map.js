"use client";

import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

const Map = ({ lat, lng }) => {
  const mapRef = useRef();
  const mapContainerRef = useRef();

  useEffect(() => {
    if (!lat || !lng) {
      console.error("Latitud y longitud no son válidas.");
      return;
    }

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!mapboxgl.accessToken) {
      console.error("Token de acceso de Mapbox no es válido.");
      return;
    }
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    mapRef.current = new mapboxgl.Map({
      style: "mapbox://styles/mapbox/streets-v12",
      container: mapContainerRef.current,
      center: [lng, lat],
      zoom: 18,
    });

    const marker = new mapboxgl.Marker({
      color: "#ff8f00",
      scale: 2,
    })
      .setLngLat([lng, lat])
      .addTo(mapRef.current);

    const navControls = new mapboxgl.NavigationControl({
      showZoom: true,
    });
    mapRef.current.addControl(navControls, "top-right");

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return (
    <>
      <div
        id="map-container"
        style={{ height: "95%", width: "100%" }}
        ref={mapContainerRef}
      ></div>
    </>
  );
};

export default Map;
