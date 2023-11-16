import React from "react";
import TrabajoPortafolio from "./TrabajoPortafolio";
import "../css/portafolio.css"

function Portafolio() {
  return (
    <section className="portafolio">
      <div className="contenedor">
        <h2 className="titulo">Portafolio</h2>
        <div className="galeria-port">
          <TrabajoPortafolio titulo="Baranda Balcon" imagen={"https://aberturasaranda.com.ar/imag/baranda.jpg"}/>
          <TrabajoPortafolio titulo="Mampara de Baño" imagen="https://aberturasaranda.com.ar/imag/mampara.jpg"/>
          <TrabajoPortafolio titulo="Ventanas" imagen="https://aberturasaranda.com.ar/imag/ventana.jpeg"/>
          <TrabajoPortafolio titulo="Puertas Blindex" imagen="https://aberturasaranda.com.ar/imag/blindex.jpg"/>
          <TrabajoPortafolio titulo="Techos Corredizo" imagen="https://aberturasaranda.com.ar/imag/techo-corredizo.jpg"/>
          <TrabajoPortafolio titulo="Puertas Plegadizas" imagen="https://aberturasaranda.com.ar/imag/plegadiza.jpg"/>
          <TrabajoPortafolio titulo="Puertas de Abrir" imagen="https://aberturasaranda.com.ar/imag/pta-abrir.jpg"/>
          <TrabajoPortafolio titulo="Puertas Corrediza" imagen="https://aberturasaranda.com.ar/imag/ptas-corredizas.jpg"/>
        </div>
      </div>
    </section>
  );
}

export default Portafolio;
