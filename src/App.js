import React from "react";
import Pregunta from "./components/Pregunta";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1 className="">Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          <Pregunta />
        </div>
      </header>
    </div>
  );
};
export default App;
