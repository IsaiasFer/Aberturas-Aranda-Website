import React from "react";
import TrabajoPortafolio from "./TrabajoPortafolio";
import "../css/portafolio.css"

function Portafolio() {
  return (
    <section className="portafolio">
      <div className="contenedor">
        <h2 className="titulo">Portafolio</h2>
        <div className="galeria-port">
          <TrabajoPortafolio titulo="Baranda Balcon" imagen={"http://aluminioargentino.online/imag/baranda.jpg"}/>
          <TrabajoPortafolio titulo="Mampara de Baño" imagen="http://aluminioargentino.online/imag/mampara.jpg"/>
          <TrabajoPortafolio titulo="Ventanas" imagen="http://aluminioargentino.online/imag/ventana.jpeg"/>
          <TrabajoPortafolio titulo="Puertas Blindex" imagen="http://aluminioargentino.online/imag/blindex.jpg"/>
          <TrabajoPortafolio titulo="Techos Corredizo" imagen="http://aluminioargentino.online/imag/techo-corredizo.jpg"/>
          <TrabajoPortafolio titulo="Puertas Plegadizas" imagen="http://aluminioargentino.online/imag/plegadiza.jpg"/>
          <TrabajoPortafolio titulo="Puertas de Abrir" imagen="http://aluminioargentino.online/imag/pta-abrir.jpg"/>
          <TrabajoPortafolio titulo="Puertas Corrediza" imagen="http://aluminioargentino.online/imag/ptas-corredizas.jpg"/>
        </div>
      </div>
    </section>
  );
}

export default Portafolio;
