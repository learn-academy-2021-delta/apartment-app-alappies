import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { CardTitle } from 'reactstrap'
import livingroom from '../assets/cozylivingroom.jpeg'


class ProtectedIndex extends Component {
  render() {
    const { apartments } = this.props
    return (
      <>
      <div className="page-body"></div>
        <h1 id="indexHeader">GET COMFY!</h1>
        <p id="indexPtag">Take a look around!</p>
        <div className="index-cards">
          {apartments && apartments.map(apartment => {
            return (
              <Row key={apartment.id}>
                <Col sm="6">
                  <Card body>
                    <CardTitle tag="h5">Your Next Home</CardTitle>
                    <h2>🏘</h2>
                    <NavLink to={`/apartmentshow/${apartment.id}`}><Button>Take a closer look</Button></NavLink>
                  </Card>
                </Col>
              </Row>
            
            )
          })}
        </div>
        
        <img
                src={livingroom}
                alt="cozylivingroom"
                className="livingroom"
        />

      </>
      
    )
  }
}
export default ProtectedIndex