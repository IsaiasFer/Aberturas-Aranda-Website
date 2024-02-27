import React from 'react'
import "../css/quienesSomos.css"

function EquipoDeTrabajo() {
  return (
    <>
        <section className="logo">
            <img src="http://aluminioargentino.online/imag/LOGO-sin-fondo.png" alt=""/>
        </section>
        <section className="contenedor sobre-nosotros">
            <div className="titulos">
                <h2 className="Titulo">¿Por qué elegirnos?.....Nuestro Equipo de Trabajo.</h2>
                <div className="contenedor-sobre-nosotros">
                    <img src="http://aluminioargentino.online/imag/trabajadores.jpeg" alt="" className="imagen-about-us"/>
                    <div className="contenido-textos">
                        <h3><span> 1</span> Mano de Obra Calificada y Comprometida.</h3>
                        <p>Nuestro equipo de técnico es altamente calificado, está especializado en realizar trabajos
                            excepcionales. Nuestro Foco es buscar la excelencia, lo que nos distingue y permite
                            sobresalir en un mercado cada vez más competitivo.</p>
                        <h3><span> 2</span> Trayectoría y Experiencia.</h3>
                        <p>Cada miembro de nuestro equipo es un profesional experimentado en su campo. Hemos liderado
                            diversos proyectos y hemos adquirido un conocimiento profundo que nos permite superar
                            obstáculos de manera efectiva. </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default EquipoDeTrabajo