import React from "react";
import BarraNavegacion from "./BarraNavegacion";
import Hero from "./Hero";
import Ondas from "./Ondas";
import "../css/header.css"

function Header(props) {
  return (
    <header>
      <BarraNavegacion />
      <Hero texto={props.texto}/>
      <Ondas />
    </header>
  );
}

export default Header;
