import React from 'react'
import {shallow} from 'enzyme'
import {findByTestAtrr, checkProps} from 'helpers/index'
import Header from './index'

const setUp = (props={}) => {
    const wrapper = shallow(<Header {...props} />)
    return wrapper
}

describe('Header component', () => {

    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                title: "Foo"
            }
            const propsErr = checkProps(Header, expectedProps)
            expect(propsErr).toBeUndefined()
        })
    })

    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Bar'
            }
            wrapper = setUp(props)
        })

        it('should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'headerComponent')
            expect(component.length).toBe(1)
        })

        it('should render h1 with props title value', () => {
            const component = findByTestAtrr(wrapper, 'h1')
            expect(component.text()).toContain('Bar')
        })
    })

    describe('Have NO props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp()
        })

        it('should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'headerComponent')
            expect(component.length).toBe(1)
        })
    
        it('should render image', () => {
            const component = findByTestAtrr(wrapper, 'imagePNG')
            expect(component.length).toBe(1)
        })
    })
})
