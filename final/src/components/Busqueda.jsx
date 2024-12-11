import React from "react";

const Busqueda = ({ valor, onCambiar, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Ingrese el nombre del país"
        value={valor}
        onChange={(e) => onCambiar(e.target.value)}
      />
    </form>
  );
};

export default Busqueda;
