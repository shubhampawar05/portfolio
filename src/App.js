import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import AboutMe from "./Components/AboutMe";
import Contactus from "./Components/Contactus";
import Projects from "./Components/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutPage from "./Components/LayoutPage";

function App() {
  return (
    <BrowserRouter>
     

      <Routes>
        <Route path="/" element={<LayoutPage/>}>
          <Route path="/" element={<Home/>}/>
       
          <Route path="/project" element={<Projects />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="/contactus" element={<Contactus />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
