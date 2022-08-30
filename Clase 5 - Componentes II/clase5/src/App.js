import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {

  // const categorias = ["Electronics", "Audio & Video", "Clothing"]

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Hola! Bienvenido a nuestra app!"}/>
    </>
  );
}

export default App;
