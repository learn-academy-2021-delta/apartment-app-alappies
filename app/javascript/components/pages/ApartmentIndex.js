import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import comfyChair from '../assets/comfyChair.jpeg'


class ApartmentIndex extends Component {
  render() {
    const { apartments } = this.props
    return (
      <div className="page-body">
        <h3>Your Future Home Awaits!</h3>
        <img id="index-image"
          src={comfyChair}
          alt="Dream Home Img"
          className="comfyChair"
        />
        <br />
        <br />
        <article className="cards">
          {apartments && apartments.map(apartment => {
            return (
              <section key={apartment.id} className="card">
                <div>
                  🛣
                    {apartment.street}
                </div>
                <div>
                  🌆
                    {apartment.city}, {apartment.state}
                </div>
                <br />
                <NavLink to={`/apartmentshow/${apartment.id}`}>
                  <Button>
                    More Info
                  </Button>
                </NavLink>
              </section>
            )
          })}
        </article>
      </div>
    )
  }
}
export default ApartmentIndex