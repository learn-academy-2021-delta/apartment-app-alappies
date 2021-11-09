import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from "reactstrap"

class Footer extends Component{
  render(){
    return(
      <footer>
        <div className="nav-bar">
          <Nav className="nav-links">
          <NavItem>
            <NavLink to="/">HOME</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/apartmentindex">See New Apartments</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/users/sign_up">Login</NavLink>
          </NavItem>
        </Nav>
        </div>
      </footer>
    )
  }
}
export default Footer