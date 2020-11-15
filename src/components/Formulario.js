import React, { useState } from "react";

function Formulario() {
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aqui</h2>
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
          value={cantidad}
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

export default Formulario;
