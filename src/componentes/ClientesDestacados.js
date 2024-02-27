import React from "react";
import "../css/clientes.css";
import Empresa from "./Empresa";

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
            <Empresa
              nombre="Biblioteca Provincial de Salta."
              imagen="http://aluminioargentino.online/imag/biblioteca.png"
              descripcion="La Coordinación de Bibliotecas y Archivos trabaja en la
                inclusión de personas con capacidades diferentes, niños, autores
                salteños, entre otros."
            />
            <Empresa
              nombre="Cámara de la Minería de Salta."
              imagen="http://aluminioargentino.online/imag/camara2.png"
              descripcion="Coordina con Empresas Nacionales y Extranjeras, actividades de
                exploración y/o producción minera en la provincia."
            />
            <Empresa
              nombre="Centro de Convenciones."
              imagen="http://aluminioargentino.online/imag/centro.png"
              descripcion="Brinda servicio de organizacines de congresos, ferias,
                exposiciones, eventos deportivos, viajes corporativos y de
                incentivo."
            />
            <Empresa
              nombre="Proveedor de Equipos Agrícolas."
              imagen="http://aluminioargentino.online/imag/amarela.png"
              descripcion="Representa a Importantes Marcas en el Noroeste Argentino,
                brindando los mejores equipos para el transporte y trabajos
                pesados."
            />
            <Empresa
              nombre="Usina Cultural de Salta."
              imagen="http://aluminioargentino.online/imag/usina.png"
              descripcion="Es un moderno edificio que generará energía a través de la
                cultura. Su ubicación estratégica en España y Juramento, le
                permite constituirse en un espacio convocante de día y de noche,
                integrado a los circuitos culturales y turísticos de la ciudad."
            />
            <Empresa
              nombre="Instituto Médico de Alta Complejidad."
              imagen="http://aluminioargentino.online/imag/imac.png"
              descripcion="Es uno de los sanatorios más importantes de la ciudad de Salta
                apoyado en médicos de prestigio, junto con la mejor tecnología,
                respetando todas las normas de Bioseguridad, lo que garantiza la
                excelencia del servicio médico-asistencial."
            />
            <Empresa
              nombre="Casa de la Cultura."
              imagen="http://aluminioargentino.online/imag/casa.jpg"
              descripcion="Dispone sus salas para promover y facilitar las actividades
                vinculadas a las distintas expresiones culturales en un marco de
                respeto a la diversidad, para fomentar el conocimiento de los
                productos culturales y la ampliación de oportunidades de
                intercambio."
            />
            <Empresa
              nombre="Museo de Arte Contemporáneo."
              imagen="http://aluminioargentino.online/imag/contemporaneo.png"
              descripcion="Difunde, investiga y exhibe la producción relacionada a las
                artes contemporánea, observando las alternativas de exposición,
                difusión e investigación."
            />
            <Empresa
              nombre="Museo de Arqueología de Alta Montaña."
              imagen="http://aluminioargentino.online/imag/maam1.jpg"
              descripcion="De acuerdo a Trip Advisor el MAAM se encuentra número uno entre
                todos los museos de Argentina para visitar."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientesDestacados;
