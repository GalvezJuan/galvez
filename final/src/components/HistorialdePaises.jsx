import React from "react";

const HistorialDePaises = ({ historial }) => {
  return (
    <div>
      <h3>Historial de Búsquedas</h3>
      <ul>
        {historial.map((termino, index) => (
          <li key={index}>{termino}</li>
        ))}
      </ul>
    </div>
  );
};

export default HistorialDePaises;
