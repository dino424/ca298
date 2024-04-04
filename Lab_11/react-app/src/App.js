import logo from './logo.svg';
import './App.css';
import HeadingComponent from './components/heading';
import Mybutton from './components/button';
import Counter from './components/Counter';
import CatFacts from './components/CatFacts';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HeadingComponent name='Dino' />
      <Mybutton />
      <Counter />
      <CatFacts />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
