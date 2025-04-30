import { useState } from "react";

export function useGeolocation() {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function getPosition() {
    if (!navigator.geolocation) {
      setError("O seu navegador não suporta geolocalização.");
      return;
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { position, error, isLoading, getPosition };
}