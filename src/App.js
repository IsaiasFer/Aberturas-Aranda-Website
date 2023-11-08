import logo from './platzi.webp';
import './App.css';
import ToDoCounter from './ToDoCounter';

function App() {
  return (
    <div className="App">
      <ToDoCounter/>
      <ToDoItem/>
      <ToDoItem/>
      <ToDoItem/>
    </div>
  );
}

function ToDoItem(){
  return(
    <li>
      <span>V</span>
      <p>Conquistar Salta Capital</p>
      <span>X</span>
    </li>
  )
}

export default App;


