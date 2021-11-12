import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentNew from './ApartmentNew'

Enzyme.configure({adapter: new Adapter()})

describe("When ApartmentNew renders", () => {
  it("displays a header", () => {
    const newHeading = shallow(<ApartmentNew />).find("h3")
    expect(newHeading.text()).toEqual("Add new Apartment")
  })
})