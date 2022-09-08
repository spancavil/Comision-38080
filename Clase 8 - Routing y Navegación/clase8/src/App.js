import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';

function App() {

  // const categorias = ["Electronics", "Audio & Video", "Clothing"]

  return (
    <>
      <NavBar />
      {/* <ItemListContainer greeting={"Hola! Bienvenido a nuestra app!"}/> */}
      <ItemDetailContainer/>
    </>
  );
}
export default App;