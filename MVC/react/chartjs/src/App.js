import React from 'react'

import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Liste from './components/ListeMonument';
import Monument from './components/Monument';

const App = () => {
  return (
    <>
    <Router>
    <header>
    <nav class="navbar navbar-expand-xxl navbar-light bg-secondary bg-opacity-75">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/">Patrimoine Français</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" to="/"> Accueil </Link>
            
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/liste"> Liste des Monuments </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="mailto:edifices_religieux_francais@univ-lyon2.fr?subject=Monument Patrimoine" >Nous Contacter</a>
          </li>
        </ul>
        {/*         <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-dark" type="submit">Recherche</button>
  </form> */}
      </div>
    </div>
    </nav>
    </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liste" element={<Liste />} />
        <Route path="/monument/:nom" element={<Monument />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App