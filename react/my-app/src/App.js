import logo from './logo.svg';
import './App.css';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import NavBarForm from './components/NavBarForm';
import Sidebar from './components/Sidebar';

function App() {
  return <div className="App">
      <NavBarForm />
      <Sidebar />
  </div>;
}

export default App;
