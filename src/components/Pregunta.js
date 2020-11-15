import React, { useState } from "react";
import Error from "./Error";

const Pregunta = ({
  guardarPresupuesto,
  guardarRestante,
  actualizarPregunta,
}) => {
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  // Leer presupuesto

  const definirPresupuesto = (evt) => {
    guardarCantidad(parseInt(evt.target.value, 10));
  };

  // Submit para definir el presupuesto

  const agregarPresupuesto = (evt) => {
    evt.preventDefault();

    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  };

  return (
    <>
      <h2>Coloca tu Presupuesto</h2>
      {error ? <Error>El presupuesto es incorrecto</Error> : null}
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
