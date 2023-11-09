import React from "react";

function Ondas() {
  return (
    /* Efecto de la ola en la parte inferior curva, le pusimos blanco para q se confunda con el fondo */
    <div className="wave" /* style="height: 150px; overflow: hidden;" */>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        /* style="height: 100%; width: 100%;" */
      >
        <path
          d="M0.00,49.85 C150.00,149.60 349.20,-49.85 500.00,49.85 L500.00,149.60 L0.00,149.60 Z"
          /* style="stroke: none; fill: #fff;" */
        />
      </svg>
    </div>
  );
}

export default Ondas;
