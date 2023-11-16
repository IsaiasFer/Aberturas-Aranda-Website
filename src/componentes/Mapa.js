import React from "react";

function Mapa(props) {
  return (
    <div className="footer">
      <h4>{props.nombre}</h4>
      <iframe
        title="mapa1"
        className="mapa"
        src={props.urlmapa}
        width="400"
        height="300"
        /* style="border:0;" */
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      <p>
        <a href={props.url}>
          {props.ubicacion}
        </a>
        .
      </p>
    </div>
  );
}

export default Mapa;
