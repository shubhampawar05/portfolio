
import "./App.css";
import AboutMe from "./Components/AboutMe";
import Contactus from "./Components/Contactus";
import Projects from "./Components/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutPage from "./Components/LayoutPage";
import MainScreen from "./Components/MainScreen";

function App() {
  return (
    <BrowserRouter>
     

      <Routes>
        <Route path="/" element={<LayoutPage/>}>
          <Route path="/" element={<MainScreen/>}/>
       
          <Route path="/project" element={<Projects />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="/contactus" element={<Contactus />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
