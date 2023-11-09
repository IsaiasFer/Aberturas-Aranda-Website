import React from "react";

function ClientesDestacados() {
  return (
    <>
      <section className="google map">
        <p>
          Aqui puedes ver{" "}
          <a href="https://maps.app.goo.gl/NRE2pQpXqGieHZNP6">
            {" "}
            todas las opiniones
          </a>
          .
        </p>
      </section>
      <section className="empresas">
        <div className="contenedor">
          <h2 className="titulo">Empresas que Confían en Nosotros.</h2>
          <div className="nos-prefieren">
            <div className="empresas-ind">
              <img src="imag/biblioteca.png" alt="" />
              <h3>Biblioteca Provincial de Salta.</h3>
              <p>
                La Coordinación de Bibliotecas y Archivos trabaja en la
                inclusión de personas con capacidades diferentes, niños, autores
                salteños, entre otros.
              </p>
            </div>
            <div className="empresas-ind">
              <img src="imag/camara2.png" alt="" />
              <h3>Cámara de la Minería de Salta.</h3>
              <p>
                Coordina con Empresas Nacionales y Extranjeras, actividades de
                exploración y/o producción minera en la provincia.
              </p>
            </div>
            <div className="empresas-ind">
              <img src="imag/centro.png" alt="" />
              <h3>Centro de Convenciones.</h3>
              <p>
                Brinda servicio de organizacines de congresos, ferias,
                exposiciones, eventos deportivos, viajes corporativos y de
                incentivo.
              </p>
            </div>
            <div className="empresas-ind">
              <img src="imag/amarela.png" alt="" />
              <h3>Proveedor de Equipos Agrícolas.</h3>
              <p>
                Representa a Importantes Marcas en el Noroeste Argentino,
                brindando los mejores equipos para el transporte y trabajos
                pesados.
              </p>
            </div>
            <div className="empresas-ind">
              <img src="imag/usina.png" alt="" />
              <h3>Usina Cultural de Salta.</h3>
              <p>
                Es un moderno edificio que generará energía a través de la
                cultura. Su ubicación estratégica en España y Juramento, le
                permite constituirse en un espacio convocante de día y de noche,
                integrado a los circuitos culturales y turísticos de la ciudad.
              </p>
            </div>
            <div className="empresas-ind">
              <img src="imag/imac.png" alt="" />
              <h3>Instituto Médico de Alta Complejidad.</h3>
              <p>
                Es uno de los sanatorios más importantes de la ciudad de Salta
                apoyado en médicos de prestigio, junto con la mejor tecnología,
                respetando todas las normas de Bioseguridad, lo que garantiza la
                excelencia del servicio médico-asistencial.
              </p>
            </div>
            <div className="empresas-ind">
              <img src="imag/casa.jpg" alt="" />
              <h3>Casa de la Cultura.</h3>
              <p>
                Dispone sus salas para promover y facilitar las actividades
                vinculadas a las distintas expresiones culturales en un marco de
                respeto a la diversidad, para fomentar el conocimiento de los
                productos culturales y la ampliación de oportunidades de
                intercambio.
              </p>
            </div>
            <div className="empresas-ind">
              <img src="imag/contemporaneo.png" alt="" />
              <h3>Museo de Arte Contemporáneo.</h3>
              <p>
                Difunde, investiga y exhibe la producción relacionada a las
                artes contemporánea, observando las alternativas de exposición,
                difusión e investigación.
              </p>
            </div>
            <div className="empresas-ind">
              <img src="imag/maam1.jpg" alt="" />
              <h3>Museo de Arqueología de Alta Montaña.</h3>
              <p>
                De acuerdo a Trip Advisor el MAAM se encuentra número uno entre
                todos los museos de Argentina para visitar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientesDestacados;
