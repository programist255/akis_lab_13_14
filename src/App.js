import logo from './logo.svg';
import './App.css';
import {CFooter} from './components/CFooter';
import CHeader from './components/CHeader';

function App() {
  return (
    <div className="App">
      <CHeader aName='Mykhailo' aFamily='Kulyk'/>
      <CFooter weather = 'slonce' temp='25'/>
      <CFooter weather = 'deszczowa' temp='13'/>
      <CFooter weather = 'sniezna' temp='-8'/>
      <CFooter weather = 'slonce' temp='20'>
        <p>Niebo jest w chmurze, wiatru nie ma</p>
      </CFooter>
      
    </div>
  );
}

export default App;
