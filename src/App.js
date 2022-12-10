import './App.css';
import Hello from './components/Hello';
import Goodmorning from './components/Goodmorning';
import Heading from './components/Heading';

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
    </div>
  );
}

export default App;
