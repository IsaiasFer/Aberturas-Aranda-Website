import { /* Router, */ HashRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/home";
import Contacto from "./paginas/contacto";
import AcercaDe from "./paginas/acercaDe";
import Servicios from "./paginas/servicios";
import Portafolio from "./paginas/portafolio";
import Footer from "./componentes/Footer";

function App() {
  return (
    <HashRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<AcercaDe />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
export default App;
