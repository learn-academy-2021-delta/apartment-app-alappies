import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Home from './Home'

Enzyme.configure({adapter: new Adapter()})

describe("When Home renders", () => {
    it ("displays an image",  () => {
        const home = shallow(<Home />)
        expect(home.find("img").prop("src"))
    })
})


