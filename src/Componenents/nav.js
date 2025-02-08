import React from 'react';
import logo from 'assets/Logo.svg';

const Nav = () => {
    return (
        <nav>
            <a href="/">
            <img src={logo} alt="little lemom logo"/>
            </a>
        </nav>
    )
}

export default Nav;