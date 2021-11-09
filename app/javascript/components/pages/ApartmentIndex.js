import React, { Component } from 'react'
import livingroom from '../assets/cozylivingroom.jpeg'


class ApartmentIndex extends Component {
  render() {
    const { apartments } = this.props
    return (
      <>
      <div className="page-body"></div>
   <h1 id="indexHeader">GET COMFY!</h1>
   <p id="indexPtag">Take a look around!</p>
   <img
          src={livingroom}
          alt="cozylivingroom"
          className="livingroom"
        />

      </>
      
    )
  }
}
export default ApartmentIndex