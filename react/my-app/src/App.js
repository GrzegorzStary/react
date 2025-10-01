import logo from './logo.svg';
import './App.css';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="I am a statefull class component" name="Greg!"/>
    </div>
  );
}

export default App;
