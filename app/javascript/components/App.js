import React, { Component } from 'react'
import ApartmentIndex from './pages/ApartmentIndex'
import Home from './pages/Home'
import Footer from './Footer'
import ApartmentShow from './pages/ApartmentShow'
import Header from './Header'

import {
  BrowserRouter as Router, 
  Routes,
  Route
}from 'react-router-dom'

class App extends Component {
  render() {
  
    return (    
  <>
  <Router>
    <Header {...this.props}/>
    <Routes>
    <Route exact path="/" element={ <Home /> } />
    <Route path="/index" element={ <ApartmentIndex /> } />
    <Route path="/show" element={ <ApartmentShow /> } />
    </Routes>
    <Footer />
  </Router>
  </>
    )
  }
}

export default App
