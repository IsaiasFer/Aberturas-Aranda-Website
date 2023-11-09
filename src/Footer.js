import React from "react";
import Contacto from "./Contacto";
import Mapa from "./Mapa";
import RedSocial from "./RedSocial";

function Footer() {
  return (
    <footer>
      <div className="contenedor-footer">
        <div className="contact">
          <Contacto />
          <Contacto />
        </div>
        <div className="mapas">
          <Mapa />
          <Mapa />
        </div>
        <div className="RedesSociales">
          <RedSocial />
          <RedSocial />
          <RedSocial />
          <RedSocial />
          <RedSocial />
          <RedSocial />
          <RedSocial />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
