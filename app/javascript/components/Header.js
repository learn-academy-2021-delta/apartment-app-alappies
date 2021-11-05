
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class Header extends Component {
  render() {
    return (
      <header>

        <h1 id="title">APARTMENT LYFE</h1>
        
        <div className="nav-links">
          <ul>
            <NavLink to="/apartmentindex">Find your new home today!</NavLink>
          </ul>

        </div>
      </header>
    )
  }
}
export default Header 