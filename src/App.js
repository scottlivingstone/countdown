import logo from './logo.svg';
import DateDiff from './DateDiff';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <DateDiff />
        </p>
      </header>
    </div>
  );
}

export default App;
