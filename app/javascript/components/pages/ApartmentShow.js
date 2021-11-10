
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class ApartmentShow extends Component {
  render() {
    const { apartment } = this.props
    return (
        <div className="body-container">
         <h3>Your New Home</h3>
         <br />
        <article className="cards">
          {apartment &&
            <section className="card">
              <h4>Location</h4>
              <h5>
                🛣{apartment.street}
              </h5>
              <h5>
                🌉{apartment.city}, {apartment.state}
              </h5>
              <br />
              <h4>Manager Info</h4>
              <h5>
                🏢{apartment.manager}
              </h5>
              <h5>
                💻{apartment.email}
              </h5>
              <br />
              <h4>Details</h4>
              <h5>
                💰{apartment.price} per month
              </h5>
              <h5>
                🛌Bedrooms: {apartment.bedrooms}
              </h5>
              <h5>
                🛁Bathrooms: {apartment.bathrooms}
              </h5>
              <h5>
                🦮Pets Allowed: {apartment.pets}
              </h5>
              <br />
              <NavLink to="/apartmentindex">
                <Button>Back</Button>
              </NavLink>
            </section>
          }
        </article>
      </div>
    )
  }
}
export default ApartmentShow