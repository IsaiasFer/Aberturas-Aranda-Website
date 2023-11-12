import React from "react";

function Ventana(props) {
  return (
    <div class="aluminio">
      <img src={props.imagen} alt={`Foto de ${props.nombre}`} />
      <h3>{props.nombre}</h3>
      <p>
        {props.descripcion}
      </p>
    </div>
  );
}

export default Ventana;
