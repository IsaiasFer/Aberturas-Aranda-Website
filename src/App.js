import logo from "./platzi.webp";
import "./App.css";
import ToDoCounter from "./ToDoCounter";
import EquipoDeTrabajo from "./EquipoDeTrabajo";
import Header from "./Header";
import CincoEstrellas from "./CincoEstrellas";
import Opiniones from "./Opiniones";
import Footer from "./Footer";
import Portafolio from "./Portafolio";
import ClientesDestacados from "./ClientesDestacados";
import './css/estilos.css'


function App() {
  return (
    <div className="App">
      <Header />
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
    </div>
  );
}

function ToDoItem() {
  return (
    <li>
      <span>V</span>
      <p>Conquistar Salta Capital</p>
      <span>X</span>
    </li>
  );
}

export default App;
