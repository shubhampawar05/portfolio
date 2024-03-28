import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Skills from './Components/Skills';
import AboutMe from './Components/AboutMe';
import Contactus from './Components/Contactus';

function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     {/* <AboutMe/> */}
     <Skills/>
     <Contactus/>
    </div>
  );
}

export default App;
