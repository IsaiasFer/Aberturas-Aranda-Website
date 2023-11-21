import React from "react";

function Contacto(props) {
  return (
    <div className="footer">
      <h4>{props.nombre}</h4>
      <p>{props.valor}</p>
    </div>
  );
}
export default Contacto;