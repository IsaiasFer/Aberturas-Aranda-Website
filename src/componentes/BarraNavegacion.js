import React from "react";
import {Link} from 'react-router-dom'

function BarraNavegacion() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/nosotros">Acerca de</Link>
      <Link to="/portafolio">Portafolio</Link>
      <Link to="/servicios">Servicios</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}

export default BarraNavegacion;
