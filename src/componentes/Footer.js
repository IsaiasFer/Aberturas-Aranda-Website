import React from "react";
import Contacto from "./Contacto";
import Mapa from "./Mapa";
import RedSocial from "./RedSocial";
import "../css/footer.css";

function Footer() {
  return (
    <footer>
      <div className="contenedor-footer">
        <div className="contact">
          <Contacto />
          <Contacto />
        </div>
        <div className="mapas">
          <Mapa nombre="Central" ubicacion="Zacarias Yanci 1152" url="https://www.google.com/maps?q=-24.7985904,-65.4474197&z=17&hl=es" urlmapa="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3621.9083868346283!2d-65.44999462463116!3d-24.79859037796968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ3JzU0LjkiUyA2NcKwMjYnNTAuNyJX!5e0!3m2!1ses!2sar!4v1698012084781!5m2!1ses!2sar"/>
          <Mapa nombre="Sucursal" ubicacion="Av. Universidad Católica 1600" url="https://www.google.com/maps?q=-24.8012334,-65.3744185&z=17&hl=es" urlmapa="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3621.8311883883152!2d-65.37699342463094!3d-24.801233377967947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ4JzA0LjQiUyA2NcKwMjInMjcuOSJX!5e0!3m2!1ses!2sar!4v1698012665990!5m2!1ses!2sar"/>
        </div>
        <div className="RedesSociales">
          <RedSocial
            nombre="Facebook"
            url="https://www.facebook.com/aberturasdealuminiodantearanda/"
            imagen="http://aberturasaranda.com.ar/imag/facebook-s-f.png"
          />
          <RedSocial
            nombre="Instagram"
            url="https://www.instagram.com/aberturas_aranda/"
            imagen="http://aberturasaranda.com.ar/imag/instagram-s-f.png"
          />
          <RedSocial
            nombre="TikTok"
            url="https://www.tiktok.com/@aberturasaranda"
            imagen="http://aberturasaranda.com.ar/imag/tiktok-s-f.png"
          />
          <RedSocial
            nombre="Youtube"
            url="https://www.youtube.com/@aberturasaranda"
            imagen="http://aberturasaranda.com.ar/imag/youtube-s-f.png"
          />
          <RedSocial
            nombre="Twitter"
            url="http://aberturasaranda.com.ar/Twitter.com/AberturasAranda"
            imagen="http://aberturasaranda.com.ar/imag/twitter-s-f.png"
          />
          <RedSocial
            nombre="Linkedin"
            url="https://www.linkedin.com/in/aberturas-aranda-/"
            imagen="http://aberturasaranda.com.ar/imag/linkedin-s-f.png"
          />
          <RedSocial
            nombre="WhatsApp"
            url="https://wa.me/5493875161937?text=Hola%20que%20tal%20me%20gustar%C3%ADa%20contactarme%20con%20Aberturas%20Aranda%20:%20"
            imagen="http://aberturasaranda.com.ar/imag/WhatsApp-s-f.png"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
