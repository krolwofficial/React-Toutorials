import React from 'react'
import Logo from './../../assets/image.png'
import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header data-test="headerComponent">
            <img data-test="imagePNG" src={Logo} alt="Jest logo"/>
            <h1 data-test="h1">Hello {title}</h1>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
