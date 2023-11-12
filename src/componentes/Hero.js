import React from "react";

function Hero(props) {
  return (
    <section className="textos-header">
      <h1>
        {props.texto}
      </h1>
    </section>
  );
}

export default Hero;
