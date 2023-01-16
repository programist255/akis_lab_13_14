import logo from './logo.svg';
import './App.css';
import {CFooter} from './components/CFooter';
import CHeader from './components/CHeader';

function App() {
  return (
    <div className="App">
      <CHeader/>
      <CFooter weather = 'slonce' temp='25'/>
      
    </div>
  );
}

export default App;
