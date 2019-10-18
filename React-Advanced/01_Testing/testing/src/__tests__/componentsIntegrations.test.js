import React from 'react'
import {mount} from 'enzyme'
import Provider from 'store'
import App from 'components/App'
import moxios from 'moxios'

beforeEach( () => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}]
    })
})
afterEach( () => {
    moxios.uninstall();
})

it('can catch a list of comments and display them', (done) => {
    const wrapper = mount(
        <Provider>
            <App/>
        </Provider>
    )
    expect(wrapper.find('li').length).toEqual(0);

    wrapper.find('input[type="button"]').simulate('click')

    moxios.wait(() => {
        wrapper.update();
        expect(wrapper.find('li').length).toEqual(2);

        done();
        wrapper.unmount();
    })
    
})
