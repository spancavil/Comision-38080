import './App.css';
import NavBar from './components/NavBar';

function App() {

  let numeroDeClase = 40;

  return (
    <>
      <NavBar/>
      <div className="App">
        {/* Estilos en línea */}
        <p style={
          {
            color: 'salmon',
            paddingTop: '10px', 
          }
        }>
          Bienvenidos a la clase {numeroDeClase}!
        </p>
        <hr/>
        <input placeholder='Ingrese algún contenido'/>
      </div>
    </>
  );
}

export default App;
