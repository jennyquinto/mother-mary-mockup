import React from 'react';
import Navbar from './Navbar';
import Virgen from '../assets/Virgin.png';
import Arrow from '../assets/arroy1.png'
import Stars from '../assets/starts.png'
import Light from '../assets/light.png'

const Header = () => {
    return (
        <header>
            <Navbar />
            <div className="header-section">
                <div>
                    <h1 className='header-title' data-end=" NFT &nbsp;">COLLECT<br />MOTHER MARY<br />ART</h1>
                    <p className='header-text'>Find the best upcoming and live NFT drops. Moonly provides<br />analytics to help you make good NFT investments.</p>
                    <button>VER EN OPENSEA</button>
                    <img src={Arrow} alt="Arrow Image" className='header-arrow' />

                </div>
                <img src={Virgen} alt="Virgin Image" className='header-img' />
                <img src={Stars} alt="Starts Image" className='header-stars' />
            </div>
        </header>
    )
}

export default Header;
