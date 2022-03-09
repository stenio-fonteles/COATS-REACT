import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import style from  './index.module.css'
import Home from './components/pages/home'
import Contact from './components/pages/contact'
import Company from './components/pages/company'
import NewProject from './components/pages/newproject'
import Project from './components/pages/Project'

import NavBar from './components/Layout/NavBar/nav'
import Footer from './components/Layout/Footer/Footer'



render(
  <BrowserRouter ClassName={style}>
  
  <NavBar/>

    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/contato" element={<Contact />}/>
      <Route path="/company" element={<Company />}/>
      <Route path="/NewProject" element={<NewProject />}/>
      <Route path="/Project" element={<Project />}/>
    </Routes>
  
  <Footer/>
  </BrowserRouter>,
  document.getElementById("root")
);