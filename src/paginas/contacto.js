import React, { useRef } from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import "../css/estilosc.css";
import emailjs from "@emailjs/browser";

function sendMessages() {
  (function () {
    emailjs.init("Th7oyzCvGVZDsHHXE");
  })();
  var serviceID = "service_8rkq6vk";
  var templateID = "template_d7908lj";

  var params = {
    sendername: document.querySelector("#name").value,
    senderemail: document.querySelector("#email").value,
    number: document.querySelector("#numero").value,
    message: document.querySelector("#message").value,
  };
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert("Gracias " + params["sendername"] + " tu mensaje ha sido enviado");
    })
    .catch();
}

function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8rkq6vk",
        "template_d7908lj",
        form.current,
        "Th7oyzCvGVZDsHHXE"
      )
      .then(
        (result) => {
          console.log("Hola que onda");
        },
        (error) => {
          console.log("Hubo un error");
        }
      );
  };

  return (
    <>
      <Header texto="La Claridad y Transparencia de Nuestros Cristales Reflejan la Confianza que Brindamos." />
      <main>
        <section className="contenedorc sobre-nosotros">
          <div className="contact-img">
            <img
              src="https://aberturasaranda.com.ar/imag/escribirmail.png"
              alt=""
            />
          </div>
          <div className="contacto">
            <h1>CONTACTO</h1>
            <h3>SI QUIERES MAS INFORMACIÓN O UN PRESUPUESTO.</h3>
            <p>
              Para que nos pongamos en contacto, por favor llena el siguiente
              formulario y alguien de nuestro equipo de trabajo se comunicará,
              tan pronto como nos sea posible.E
            </p>
            <form ref={form} id="contact-form" onSubmit={sendEmail}>
              <div
                className="form-row form-error"
                style={{ display: "none" }}
              ></div>
              <div className="form-row">
                <input
                  placeholder="Nombre y Apellido"
                  id="name"
                  className="form-input"
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div className="form-row">
                <input
                  placeholder="Correo Electrónico"
                  id="email"
                  className="form-input"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className="form-row">
                <input
                  placeholder="Número de Teléfono"
                  id="numero"
                  className="form-input"
                  type="tel"
                  name="phone"
                />
              </div>
              <div className="form-row">
                <textarea
                  placeholder="Mensaje"
                  id="message"
                  className="form-input"
                  name="message"
                  required
                />
              </div>
              <input className="botonDeEnviar" type="submit" value="send"/>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Contacto;
