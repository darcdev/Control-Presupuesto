import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Pregunta from "./components/Pregunta";
import Listado from "./components/Listado";
import ControPresupuesto from "./components/ControlPresupuesto";

const App = () => {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);
  const [maximoPresupuesto, actualizarMaximoPresupuesto] = useState(false);
  // restar presupuesto
  var presupuestoRestante = 0;
  useEffect(() => {
    //agregar nuevo presupuesto
    if (crearGasto) {
      presupuestoRestante = restante - gasto.cantidad;
      if (presupuestoRestante < 0) {
        actualizarMaximoPresupuesto(true);
        return;
      }
      guardarGastos([...gastos, gasto]);
    }
    guardarRestante(presupuestoRestante);
    guardarCrearGasto(false);
  }, [gasto]);

  return (
    <div className="container">
      <header>
        <h1 className="">Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                  maximoPresupuesto={maximoPresupuesto}
                />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />
                <ControPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};
export default App;
