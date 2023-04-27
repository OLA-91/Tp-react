import React from 'react';
import './Header.css';
import Image from '../../assets/logo.png';

function Header() {
    return (
        <div className="header-container">
            <img src={Image} alt="My App Logo" />
            <h1>La maison jungle</h1>
        </div>
    );
};


export default Header;
