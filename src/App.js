import DateDiff from './components/DateDiff';
import CountdownTimer from './components/CountdownTimer'
import Header from './components/header'
import './App.css';

function App() {
  const targetDate = new Date('2029-11-31').getTime();
  return (
    <div className='container'>
      <Header />
      <div className='row'>
        <div className='col'>
        <DateDiff />
        </div>
        <div className='col'>
        <CountdownTimer targetDate={targetDate} />
        </div>
        <div className='col'>
          <DateDiff />
        </div>
      </div>
    </div>
  );
}

export default App;
