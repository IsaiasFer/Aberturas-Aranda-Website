import EquipoDeTrabajo from "../componentes/EquipoDeTrabajo";
import CincoEstrellas from "../componentes/CincoEstrellas";
import Opiniones from "../componentes/Opiniones";
import Portafolio from "../componentes/Portafolio";
import ClientesDestacados from "../componentes/ClientesDestacados";
import React from "react";
import Header from "../componentes/Header";

function home() {
  return (
    <>
      <Header
        texto="El compromiso con nuestros clientes, se forja en cada detalle con la
        transparencia de nuestros productos."
      />
      <EquipoDeTrabajo />
      <Portafolio />
      <section className="clientes">
        <div className="contenedor-clientes">
          <CincoEstrellas />
          <Opiniones />
        </div>
      </section>
      <ClientesDestacados />
    </>
  );
}

export default home;
