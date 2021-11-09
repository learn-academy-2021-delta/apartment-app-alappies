import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentIndex from './ApartmentIndex'


Enzyme.configure({adapter: new Adapter()})

describe("When ApartmentIndex renders", () => {
    it("displays an image", () => {
        const apartmentindex = shallow(<ApartmentIndex />)
        expect(apartmentindex.find("img").prop("src")).toEqual(mockPic);
    })
})