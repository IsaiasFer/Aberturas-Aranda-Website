import React from "react";
import Ventana from "./Ventana";

function Ventanas() {
  return (
    <section className="Color">
      <div className="contenedor">
        <h2 className="titulo">Color de Aluminio.</h2>
        <div className="color-alum">
          <Ventana
            imagen="https://aberturasaranda.com.ar/imag/natural.png"
            nombre="Aluminio Natural."
            descripcion="Es el color natural y común del aluminio, en los inicios de la
              carpintería de aluminio, el aluminio era NATURAL, no lo pintaban
              tenia el acabado como el de las ollas de aluminio."
          />
          <Ventana
            imagen="https://aberturasaranda.com.ar/imag/nat-anodizado.png"
            nombre="Aluminio Natural Anodizado."
            descripcion=" Es el aluminio Natural, con el proceso electrolítico anodizado que
              le da un acabado mate, brindándole no solo un mejor diseño y
              acabado, sino haciendo que tenga una mayor protección al exterior
              y agentes agresivos."
          />
          <Ventana
            imagen="https://aberturasaranda.com.ar/imag/herrero.png"
            nombre="Aluminio Color Blanco."
            descripcion="Brinda servicio de organizacines de congresos, ferias,
              exposiciones, eventos deportivos, viajes corporativos y de
              incentivo."
          />
          <Ventana
            imagen="https://aberturasaranda.com.ar/imag/bronce-colonial.png"
            nombre="Bronce Colonial."
            descripcion="Aluminio color marrón oscuro, creado para obtener una alternativa
              a la madera, sobre todo cuando es necesario mantener una línea de
              diseño y color en la obra."
          />
          <Ventana
            imagen="https://aberturasaranda.com.ar/imag/simil-madera.png"
            nombre="Simil Madera"
            descripcion="Aluminio color marrón claro, imitación madera, creado para obtener
              una alternativa a la madera, por su especial diseño y acabado,
              este tipo de perfil es el de mayor valor económico."
          />
          <Ventana
            imagen="https://aberturasaranda.com.ar/imag/negra.png"
            nombre="Aluminio Negro."
            descripcion="Aluminio color negro, dentro de las variedades de colores el negro
              brinda sobriedad, haciendo los ambientes exclusivos y más
              equilibrados."
          />
        </div>
      </div>
    </section>
  );
}

export default Ventanas;
