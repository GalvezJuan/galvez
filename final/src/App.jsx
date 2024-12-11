import React, { useState, useEffect } from "react";
import Busqueda from "./components/Busqueda";
import Pais from "./components/Pais";
import HistorialDePaises from "./components/HistorialdePaises";

const App = () => {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [paises, setPaises] = useState([]);
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    const obtenerPaises = async () => {
      if (!terminoBusqueda.trim()) {
        setPaises([]);
        return;
      }

      try {
        const respuesta = await fetch(
          `https://restcountries.com/v3.1/name/${terminoBusqueda}`
        );
        if (!respuesta.ok) throw new Error("No se encontraron países");

        const datos = await respuesta.json();
        setPaises(datos);

        const nuevoHistorial = [terminoBusqueda, ...historial].slice(0, 5);
        if (nuevoHistorial.length > 1 && nuevoHistorial[0] !== nuevoHistorial[1]) {
          setHistorial(nuevoHistorial);
        }
      } catch (error) {
        setPaises([]);
      }
    };

    obtenerPaises();
  }, [terminoBusqueda]);

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (terminoBusqueda.trim()) {
      obtenerPaises();
    }
  };

  return (
    <div>
      <Busqueda 
        valor={terminoBusqueda} 
        onCambiar={setTerminoBusqueda} 
        onSubmit={manejarSubmit} 
      />
      
      <HistorialDePaises historial={historial} />
      <Pais paises={paises} />
    </div>
  );
};

export default App;