import React, { Component } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import Footer from './components/Footer'
import ApartmentShow from './pages/ApartmentShow'

import {
  BrowserRouter as Router, 
  Routes,
  Route
}from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: apartments
    }
  }
  
  createNewApartment = (newapartment) => {
    console.log(newapartment)
  }

  updatedApartment = (updatedInfo) => {
    console.log(updatedInfo)
  }

  render() {
    return (    
  <>
  <Router>
    <Header {...this.props} />
    <Routes>
    <Route exact path="/" element={ <Home /> } />
    <Route path="/apartmentindex" element={ <ApartmentIndex /> } />
    <Route path="/show" element={ <ApartmentShow /> } />
    </Routes>
    <Footer />
  </Router>
  </>
    )
  }
}

export default App
