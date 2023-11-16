import React from "react";

function RedSocial(props) {
  return (
    <div className="footer">
      <h4>{props.nombre}</h4>
      <a href={props.url}>
        <img src={props.imagen} alt={`Aberturas Aranda en ${props.nombre}`} />
      </a>
    </div>
  );
}

export default RedSocial;
