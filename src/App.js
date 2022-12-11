import './App.css';
import Hello from './components/Hello';
import Goodmorning from './components/Goodmorning';
import Heading from './components/Heading';
import {add,sub,mult,div} from './components/Calculator';

const box = {
    backgroundColor: 'black',
    color:'white',
    border: '10px solid #ccc',
    width: '500px',
    display:'grid',

}

function App() {
  return (
    <div className="App">
      <Heading />
      <div className="box" style={box}>
        <Hello />
        <Goodmorning />
      </div>

      <div className="calculator">
        <ul>
          <ol>Sum of two numbers is: {sub(40,4)}</ol>
          <ol>Sum of two numbers is: {div(40,4)}</ol>
          <ol>Sum of two numbers is: {mult(40,4)}</ol>
          <ol>Sum of two numbers is: {add(40,4)}</ol>
        </ul>
      </div>
    </div>
  );
}

export default App;
