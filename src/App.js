import DateDiff from './components/DateDiff';
import Header from './components/header'
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <p>
        <DateDiff />
      </p>
    </div>
  );
}

export default App;
