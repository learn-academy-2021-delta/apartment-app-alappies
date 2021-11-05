import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from "reactstrap"

class Footer extends Component{
  render(){
    return(
        <Nav className="nav-links">
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <br />
        <br />
        <NavItem>
          <NavLink to="/apartmentindex">See New Apartments</NavLink>
        </NavItem>
        <br />
        <br />
        <NavItem>
          <NavLink to="/users/sign_up">Login</NavLink>
        </NavItem>
      </Nav>
    )
  }
}
export default Footer