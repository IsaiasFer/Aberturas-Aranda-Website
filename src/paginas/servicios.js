import React from "react";
import Servicio from "../componentes/Empresa";
import Header from "../componentes/Header";

function servicios() {
  return (
    <>
      <Header texto="Somos una Empresa Salteña de Gran Trayectoria, con Más de 15 Años en el Mercado." />
      <section className="empresas">
        <div className="contenedor">
          <h2 className="titulo">Servicios que Brindamos.</h2>
          <div className="nos-prefieren">
            <Servicio
              imagen="https://aberturasaranda.com.ar/imag/pstto.jpg"
              nombre="Medición, Presupuestos y Diseños sin Cargo."
              descripcion="Realizamos mediciones y presupuestos sin cargo, con diseños para
                que el cliente pueda entender y ver si es que estamos
                representado lo que necesita."
            />
            <Servicio
              imagen="https://aberturasaranda.com.ar/imag/service-asesoramiento.jpeg"
              nombre="Asesoramiento y Consultas sin Cargo."
              descripcion="                , atendemos las consultas, orientamos y aconsejamos al cliente
                para que tome la mejor decisión, brindando diferentes
                alternativas."
            />
            <Servicio
              imagen="https://aberturasaranda.com.ar/imag/service-garantia.jpeg"
              nombre="Garantía Certificada."
              descripcion="Nos enorgullece respaldar la calidad de nuestro trabajo con
                garantía de 1 año certificada, brindándole la tranquilidad que
                merece."
            />
            <Servicio
              imagen="https://aberturasaranda.com.ar/imag/service-transporte.jpeg"
              nombre="Transporte de los Cerramientos sin Cargo."
              descripcion="Realizamos el transporte de los vidrios y aluminios a su obra,
                garantizando de esta manera que lleguen en perfectas
                condisiones."
            />
            <Servicio
              imagen="https://aberturasaranda.com.ar/imag/service-inst.jpg"
              nombre="Instalación de los Cerramientos."
              descripcion=": Nuestro equipo de instaladores altamente capacitados se
                encargará de la instalación de sus aberturas de aluminio en su
                obra, garantizando un trabajo de alta calidad y durabilidad."
            />
            <Servicio
              imagen="https://aberturasaranda.com.ar/imag/service-aluminio.jpeg"
              nombre="Mantenimiento y Arreglo de Carpintería de Aluminio."
              descripcion="Ofrecemos servicios de mantenimiento especializado para asegurar
                que sus aberturas de aluminio sigan funcionando de manera óptima
                a lo largo del tiempo."
            />
            <Servicio
              imagen="https://aberturasaranda.com.ar/imag/service-blindex.jpeg"
              nombre="Mantenimiento y Arreglo de Puertas Blindex."
              descripcion="Contamos con experiencia en el servicio y mantenimiento de
                puertas Blindex, garantizando su seguridad y funcionamiento."
            />
            <Servicio
              imagen="https://aberturasaranda.com.ar/imag/service-limpieza.jpeg"
              nombre="Limpieza de Vidrios en Altura."
              descripcion="Nuestro equipo también se encarga de la limpieza de vidrios en
                lugares de difícil acceso, para mantener su entorno limpio y
                atractivo."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default servicios;
