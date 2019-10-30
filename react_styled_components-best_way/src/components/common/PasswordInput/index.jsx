import React from 'react'
import styled from 'styled-components'

const PasswordInput = styled.input.attrs({
    type: props => props.showed ? 'text' : 'password'
})`
    border-radius: 3px;
    outline: none;
    border: 1px solid;
    border-color: black;
    &:focus{
        border-color: red
    }
`

export default PasswordInput
