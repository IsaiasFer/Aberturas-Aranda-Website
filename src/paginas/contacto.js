import React from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

function contacto() {
  return (
    <>
    <Header texto="La Claridad y Transparencia de Nuestros Cristales Reflejan la Confianza que Brindamos."/>
      <main>
        <section class="contenedor sobre-nosotros">
          <div class="contact-img">
            <img src="imag/escribirmail.png" alt="" />
          </div>
          <div class="contact">
            <h1>CONTACTO</h1>
            <h3>SI QUIERES MAS INFORMACIÓN O UN PRESUPUESTO.</h3>
            <p>
              Para que nos pongamos en contacto, por favor llena el siguiente
              formulario y alguien de nuestro equipo de trabajo se comunicará,
              tan pronto como nos sea posible.
            </p>
            <div id="contact-form">
              <div class="form-row form-error" style="display:none;"></div>
              <div class="form-row">
                <input
                  placeholder="Nombre y Apellido"
                  id="name"
                  class="form-input"
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div class="form-row">
                <input
                  placeholder="Correo Electrónico"
                  id="email"
                  class="form-input"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div class="form-row">
                <input
                  placeholder="Número de Teléfono"
                  id="numero"
                  class="form-input"
                  type="tel"
                  name="phone"
                />
              </div>
              <div class="form-row">
                <textarea
                  placeholder="Mensaje"
                  id="message"
                  class="form-input"
                  name="message"
                  required
                />
              </div>
              <button onclick="sendMessages();" type="submit">
                Enviar mensaje
              </button>
            </div>
          </div>
        </section>
      </main>
    <Footer/>
    </>
  );
}

export default contacto;
