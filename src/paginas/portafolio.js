import React from "react";
import Portafolio from "../componentes/Portafolio";
import Ventanas from "../componentes/Ventanas";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

function portafolio() {
  return (
    <>
      <Header texto="Cartera de Productos y Servicios."/>
      <main>
        <Portafolio />
        <Ventanas />
      </main>
    </>
  );
}

export default portafolio;
