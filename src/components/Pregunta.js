import React, { useState } from "react";

const Pregunta = () => {
  const [cantidad, guardarCantidad] = useState(0);

  // Leer presupuesto

  const definirPresupuesto = (evt) => {
    guardarCantidad(parseInt(evt.target.value, 10));
  };

  // Submit para definir el presupuesto

  const agregarPresupuesto = (evt) => {
    evt.preventDefault();
  };

  return (
    <>
      <h2>Coloca tu Presupuesto</h2>
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Define tu presupuesto"
        />
      </form>
    </>
  );
};

export default Pregunta;
