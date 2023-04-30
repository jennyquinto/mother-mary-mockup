import React from 'react';
import Logo from '../assets/Logo.png';

const Navbar = () => {
    return (
        <nav>
            <img src={Logo} alt="Mother mary page logo"/>
            <ul>
                <li>Home</li>
                <li>Drops</li>
                <li>Marketplace</li>
                <li>Activity</li>
                <li>Company</li>
            </ul>
            <button>Ver en opensea</button>
        </nav>
    )
}

export default Navbar;