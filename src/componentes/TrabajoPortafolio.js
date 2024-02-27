import React from "react";

function TrabajoPortafolio(props) {
  return (
    <div className="imagen-port">
      <img src={props.imagen} alt="" />
      <div className="hover-galeria">
        <img src="http://aluminioargentino.online/imag/logo2-sin-fondo.png" alt="" />
        <p>{props.titulo}</p>
      </div>
    </div>
  );
}

export default TrabajoPortafolio;
