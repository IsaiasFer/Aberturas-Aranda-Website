import React from "react";
import BarraNavegacion from "./BarraNavegacion";
import Hero from "./Hero";
import Ondas from "./Ondas";

function Header() {
  return (
    <header>
      <BarraNavegacion />
      <Hero />
      <Ondas />
    </header>
  );
}

export default Header;
