import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import App from './App'
import Home from './components/pages/home'
import Contact from './components/pages/contact'
import Company from './components/pages/company'
import NewProject from './components/pages/newproject'

import Container from './components/Layout/container'



render(
  <BrowserRouter>
  
  <Container/>

    <Routes>
      <Route exact path="/" element={<App />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/contato" element={<Contact />}/>
      <Route path="/company" element={<Company />}/>
      <Route path="/NewProject" element={<NewProject />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);