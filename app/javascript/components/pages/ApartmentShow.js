
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'


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
                ð£ {apartment.street}
              </h5>
              <h5>
                ð {apartment.city}, {apartment.state}
              </h5>
              <br />
              <h4>Manager Info</h4>
              <h5>
                ð¢{apartment.manager}
              </h5>
              <h5>
                ð»{apartment.email}
              </h5>
              <br />
              <h4>Details</h4>
              <h5>
                ð°{apartment.price} per month
                </h5>
              <h5>
                ð Bedrooms: {apartment.bedrooms}
              </h5>
              <h5>
                ð Bathrooms: {apartment.bathrooms}
              </h5>
              <h5>
                ð¦®Pets Allowed: {apartment.pets}
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