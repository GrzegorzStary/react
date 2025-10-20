import logo from './logo.svg';
import './App.css';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';

function App() {
  return (
    <div className="App">
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={true} />
    </div>
  );
}

export default App;
