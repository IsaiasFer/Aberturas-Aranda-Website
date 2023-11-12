import EquipoDeTrabajo from "./componentes/EquipoDeTrabajo";
import Header from "./componentes/Header";
import CincoEstrellas from "./componentes/CincoEstrellas";
import Opiniones from "./componentes/Opiniones";
import Footer from "./componentes/Footer";
import Portafolio from "./componentes/Portafolio";
import ClientesDestacados from "./componentes/ClientesDestacados";


function App() {
  return (
    <>
      <Header texto="El compromiso con nuestros clientes, se forja en cada detalle con la
        transparencia de nuestros productos."/>
      <main>
        <EquipoDeTrabajo />
        <Portafolio />
        <section className="clientes">
          <div className="contenedor-clientes">
            <CincoEstrellas />
            <Opiniones />
          </div>
        </section>
        <ClientesDestacados />
      </main>
      <Footer />
    </>
  );
}
export default App;
