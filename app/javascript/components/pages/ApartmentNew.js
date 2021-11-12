import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'


class ApartmentNew extends Component {
  constructor(props){
  super(props)
  this.state = {
    form:{
      street:"",
      city: "",
      state: "",
      manager: "",
      email: "",
      price: "",
      bedrooms: "",
      bathrooms: "",
      pets: "",
      user_id: this.props.current_user.id
      },
    submitted: false
    }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }

  handleSubmit = () => {
    this.props.createNewCat(this.state.form)
    this.setState({submitted: true})
  }

  render() {
    const { street, city, state, manager, email, price, bedrooms, bathrooms, pets } = this.state.form
    return (
      <div className="form-container">
 <h3>Add new Apartment</h3>
 <div className="cards">
  <Form>
    <FormGroup>
        <Label for="street">
          Street name
        </Label>
        <Input street="street"
        type="text"
        onChange={this.handleChange}
        value={this.state.form.street}>
        </Input>
    </FormGroup>
      <br/>
    <FormGroup>
        <Label for="city">
          City 
        </Label>
        <Input 
        city="city"
        type="text"
        onChange={this.handleChange}
        value={city}>
        </Input>
    </FormGroup>
    <FormGroup>
        <Label for="state">
          State 
        </Label>
        <Input state="state"
        type="text"
        onChange={this.handleChange}
        value={state}>
        </Input>
    </FormGroup>
    <FormGroup>
        <Label for="manager">
          Manager 
        </Label>
        <Input manager="manager"
        type="text"
        onChange={this.handleChange}
        value={manager}>
        </Input>
    </FormGroup>
    <FormGroup>
        <Label for="email">
          Email 
        </Label>
        <Input email="email"
        type="text"
        onChange={this.handleChange}
        value={email}>
        </Input>
    </FormGroup>
    <FormGroup>
        <Label for="price">
          Price 
        </Label>
        <Input price="price"
        type="text"
        onChange={this.handleChange}
        value={price}>
        </Input>
    </FormGroup>
    <FormGroup>
        <Label for="bedrooms">
          Bedrooms 
        </Label>
        <Input bedrooms="bedrooms"
        type="text"
        onChange={this.handleChange}
        value={bedrooms}>
        </Input>
    </FormGroup>
    <FormGroup>
        <Label for="bathrooms">
          Bathrooms 
        </Label>
        <Input bathrooms="bathrooms"
        type="text"
        onChange={this.handleChange}
        value={bathrooms}>
        </Input>
    </FormGroup>
    <FormGroup>
        <Label for="pets">
          Pet Policy 
        </Label>
        <Input pets="pets"
        type="text"
        onChange={this.handleChange}
        value={pets}>
        </Input>
    </FormGroup>
    <br />
    <Button onClick={this.handleSubmit}>
        Submit
    </Button>
  </Form>
 { this.state.submitted && <Redirect to="/myapartments" /> }
 </div> 
 </div>
      
    )
  }
}
export default ApartmentNew