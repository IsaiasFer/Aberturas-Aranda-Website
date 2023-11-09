import React from "react";

function Mapa() {
  return (
    <div className="footer">
      <h4>Central.</h4>
      <iframe
        className="mapa"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3621.9083868346283!2d-65.44999462463116!3d-24.79859037796968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ3JzU0LjkiUyA2NcKwMjYnNTAuNyJX!5e0!3m2!1ses!2sar!4v1698012084781!5m2!1ses!2sar"
        width="400"
        height="300"
        /* style="border:0;" */
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <p>
        <a href="https://www.google.com/maps?q=-24.7985904,-65.4474197&z=17&hl=es">
          Zacarias Yanci 1152
        </a>
        .
      </p>
    </div>
  );
}

export default Mapa;
