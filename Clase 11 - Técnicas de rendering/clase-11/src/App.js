import './App.css';
// import ClassBasedCondition from './components/ClassBasedCondition';
// import SpreadProperties from './components/SpreadProperties';
import CounterContainer from './containers/CounterContainer';
// import InLineStyles from './components/InLineStyles';
// import InLineTernary from './components/InLineTernary';
// import BinaryOperator from './components/BinaryOperator';
// import ReturnTemprano from './components/ReturnTemprano';

/* const stylesComponent = {
  fontSize: '22px',
  color: 'red'
} */

function App() {
  return (
    <div className="App">
      <h2>Hola coders!</h2>
      {/* <ReturnTemprano condition={"Sebas"}/> */}
      {/* <BinaryOperator condition={false}/> */}
      {/* <InLineTernary condition={""}/> */}
      {/* <InLineStyles condition={true}/> */}
      {/* <ClassBasedCondition condition={false} /> */}
      {/* <SpreadProperties /> */}
      <CounterContainer/>
    </div>
  );
}

export default App;
