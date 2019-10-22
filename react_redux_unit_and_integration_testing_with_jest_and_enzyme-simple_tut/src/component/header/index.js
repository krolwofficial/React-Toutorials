import React from 'react'
import Logo from './../../assets/image.png'

const Header = ({title}) => {
    return (
        <header data-test="headerComponent">
            <img data-test="imagePNG" src={Logo} />
            <h1 data-test="h1">Hello {title}</h1>
        </header>
    )
}

export default Header
