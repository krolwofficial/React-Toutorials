import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'
import Provider from 'store'

let wrapper

beforeEach(() => {
    wrapper = mount(
        <Provider>
            <CommentBox/>
        </Provider>
        )
})

afterEach(() => {
    wrapper.unmount()
})

it('<CommentBox/> has a text area and a button', () => {
        expect(wrapper.find('textarea').length).toEqual(1)
        expect(wrapper.find('input[type="submit"]').length).toEqual(1)
})

describe('the text area', () => {
    beforeEach(() => {
        wrapper.find('textarea').simulate('change', {
            target: {value: 'new comment'}
        })
        wrapper.update()
    })

    it('updates when a user can type in', () => {
        expect(wrapper.find('textarea').prop('value')).toEqual('new comment')
    })

    it('value is empty when the form is submited', () => {
        //expect(wrapper.find('textarea').prop('value')).toEqual('new comment')
        wrapper.find('form').simulate('submit')
        wrapper.update()
        expect(wrapper.find('textarea').prop('value')).toEqual('')
    })
})