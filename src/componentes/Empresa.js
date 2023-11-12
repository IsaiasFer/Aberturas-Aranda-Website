import React from "react";

function Empresa(props) {
  return (
    <div className="empresas-ind">
      <img src={props.imagen} alt={`Logo de ${props.nombre}`} />
      <h3>{props.nombre}</h3>
      <p>
        {props.descripcion}
      </p>
    </div>
  );
}

export default Empresa;
