import React from "react";
import Header from "../componentes/Header";

function acercaDe() {
  return (
    <>
      <Header texto="Somos una Empresa Salteña de Gran Trayectoria, con Más de 15 Años en el Mercado." />
      <main>
        <section className="logo">
          <img src="https://aberturasaranda.com.ar/imag/LOGO-sin-fondo.png" alt="" />
        </section>
        <section className="contenedor sobre-nosotros">
          <div className="titulos">
            <h2 className="Titulo">
              Somos una empresa con un firme compromiso en la inovación
              permanente, ofrecemos excelente calidad y precio en nuestros
              productos, variedad y personalizacion, entrega e instalacion
              confiable. Presentamos una amplia trayectoria en el desarrollo de
              aberturas y fachadas vidriadas. Realizamos variedad de diseños en
              nuestros productos, lo que nos permite estar a la altura de un
              mercado cada vez mas exigente.
            </h2>
            <div className="contenedor-sobre-nosotros">
              <img src="https://aberturasaranda.com.ar/imag/equip.jpeg" alt="" className="imagen-about-us" />
              <div className="contenido-textos">
                <h3>
                  <span> 1</span> MISION.
                </h3>
                <p>
                  Somos una empresa salteña especializada en la fabricación,
                  colocación e instalación de cerramientos de aluminio y
                  vidrios, Sobresalimos por nuestra incansable busqueda de la
                  satisfacción total del cliente.
                </p>
                <h3>
                  <span> 2</span> VISION.
                </h3>
                <p>
                  Posicionarnos como una empresa líder en el mercado de
                  cerramientos de aluminio y vidrios, siendo altamente
                  distinguida y reconocida por nuestros servicios de alta
                  calidad, profesionalismo y destacable atención al cliente.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default acercaDe;
