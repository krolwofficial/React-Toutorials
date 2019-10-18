import React from 'react'
import { mount } from 'enzyme'
import CommentList from 'components/CommentList'
import Provider from 'store'

let wrapper

beforeEach(() => {
    const initialState={
        comments: ['TestComment 1', 'TestComment 2']
    }

    wrapper = mount(<Provider initialState={initialState}>
        <CommentList/>
    </Provider>)
})

describe('<CommentList/>', () => {
    it('shows one "li" element per comment', () => {
        expect(wrapper.find('li').length).toEqual(2);
    })

    it('text from each comment is visible', () => {
        expect(wrapper.render().text()).toContain('TestComment 1');
        expect(wrapper.render().text()).toContain('TestComment 2');
    })
})
