import React from "react";

const Pais = ({ paises }) => {
  if (paises.length === 0) {
    return <p>No se encontraron resultados.</p>;
  }

  return (
    <div>
      {paises.map((pais) => (
        <div key={pais.cca3}>
          <h2>{pais.name.common}</h2>
          <p>Capital: {pais.capital}</p>
          <p>Población: {pais.population}</p>
          <img src={pais.flags.png} alt={`Bandera de ${pais.name.common}`} />
        </div>
      ))}
    </div>
  );
};

export default Pais;
