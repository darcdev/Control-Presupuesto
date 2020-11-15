import React, { useState } from "react";
import Error from "./Error";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

function Formulario({ guardarGasto, guardarCrearGasto, maximoPresupuesto }) {
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();
    //validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);

    //construir gasto

    var id = nanoid();
    var gasto = {
      nombre,
      cantidad,
      id,
    };

    guardarGasto(gasto);
    guardarCrearGasto(true);
    guardarNombre("");
    guardarCantidad(0);
  };
  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aqui</h2>
      {maximoPresupuesto ? <Error>Presupuesto agotado</Error> : null}
      {error ? (
        <Error>Ambos Campos son obligatorios o presupuesto incorrecto</Error>
      ) : null}
      <div className="campo">
        <label htmlFor="">Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. transporte"
          value={nombre}
          onChange={(e) => guardarNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label htmlFor="">Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 2000"
          value={isNaN(cantidad) ? String("") : cantidad}
          onChange={(e) => guardarCantidad(parseInt(e.target.value))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="gasto"
      />
    </form>
  );
}

Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired,
  maximoPresupuesto: PropTypes.bool.isRequired,
};

export default Formulario;
