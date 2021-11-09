import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class ApartmentIndex extends Component {
  render() {
    const { apartments } = this.props
    return (
      <div className="page-body">
        <h3>All the Apartments</h3>
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