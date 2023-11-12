import React from "react";
import TrabajoPortafolio from "./TrabajoPortafolio";
import "../css/portafolio.css"

function Portafolio() {
  return (
    <section className="portafolio">
      <div className="contenedor">
        <h2 className="titulo">Portafolio</h2>
        <div className="galeria-port">
          <TrabajoPortafolio titulo="Baranda Balcon" imagen={"../imag/baranda.jpg"}/>
          <TrabajoPortafolio titulo="Mampara de Baño" imagen="../imag/mampara.jpg"/>
          <TrabajoPortafolio titulo="Ventanas" imagen="../imag/ventana.jpeg"/>
          <TrabajoPortafolio titulo="Puertas Blindex" imagen="../imag/blindex.jpg"/>
          <TrabajoPortafolio titulo="Techos Corredizo" imagen="../imag/techo-corredizo.jpg"/>
          <TrabajoPortafolio titulo="Puertas Plegadizas" imagen="../imag/plegadiza.jpg"/>
          <TrabajoPortafolio titulo="Puertas de Abrir" imagen="../imag/pta-abrir.jpg"/>
          <TrabajoPortafolio titulo="Puertas Corrediza" imagen="../imag/ptas-corredizas.jpg"/>
        </div>
      </div>
    </section>
  );
}

export default Portafolio;
