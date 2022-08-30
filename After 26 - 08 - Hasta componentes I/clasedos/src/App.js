import './App.css';
import Ad from './components/Ad';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {

  const categorias = ["Electronics", "Audio & Video", "Clothing"]

  const temperatura = 18;

  return (
    <>
      <NavBar 
        categories={categorias} 
        temp={temperatura} 
      />
      <ItemListContainer greeting={"Hola! Bienvenido a nuestra app!"}/>
      <Ad>
        <h1>Titulo del Ad</h1>
        <span>Un anuncio muy molesto!</span>
      </Ad>
    </>
  );
}

export default App;
