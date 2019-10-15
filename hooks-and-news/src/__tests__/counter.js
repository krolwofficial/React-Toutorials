import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Counter from '../lessons/useState/index'

afterEach( () => {
    window.localStorage.removeItem('count')
})

test('counter increments the count' , () => {
    const {container} = render(<Counter />)
    const button = container.firstChild
    expect(button.textContent).toBe('0')
    fireEvent.click(button)
    expect(button.textContent).toBe('1')
})

test('reads and updates the localStorage', () => {
    
    // const {container} = render(<Counter />)
    // const button = container.firstChild
    // window.localStorage.setItem('count', button.textContent);
    // expect(Number(window.localStorage.getItem('count'))).toBe(0)

    window.localStorage.setItem('count', 3);
    const {container, rerender} = render(<Counter />)
    const button = container.firstChild
    expect(button.textContent).toBe('3')
    fireEvent.click(button)
    expect(button.textContent).toBe('4')
    rerender(<Counter />)
    expect(Number(window.localStorage.getItem('count'))).toBe(4)
})