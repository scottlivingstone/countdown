import DateDiff from './components/DateDiff';
import Header from './components/header'
import './App.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <div className='row'>
        <div className='col'>
        <DateDiff />
        </div>
        <div className='col'>
          <DateDiff />
        </div>
        <div className='col'>
          <DateDiff />
        </div>
      </div>
    </div>
  );
}

export default App;
