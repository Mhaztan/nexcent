import React from 'react';
import './styles/header.css';
import { FaArrowRight } from 'react-icons/fa'; // Example icon
import logo from '../assets/logo.svg'

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Nexcent Logo" className="header__logo" />
            <nav className="header__nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#community">Community</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                </ul>
            </nav>
            <button className="header__button">
                Register Now <FaArrowRight />
            </button>
        </header>
    );
}

export default Header;