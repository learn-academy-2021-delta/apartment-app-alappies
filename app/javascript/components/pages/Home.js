import React, { Component } from 'react'
import apartment1 from '../assets/apartment1.jpeg'


class Home extends Component {
  render() {
    return (
        <>
<h3 id="header">ONE CLICK AWAY FROM YOUR NEW HOME</h3>
<p id="homeTag">Sit back, enjoy your morning coffee and let APARTMENT LYFE do all the apartment searching for you!</p>
<img
          src={apartment1}
          alt="Dream Home Img"
          className="apartment1"
        />
</>
    )
  }
}
export default Home