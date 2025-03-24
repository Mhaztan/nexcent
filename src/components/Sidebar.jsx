import React, { useState } from 'react';
import './styles/sidebar.css';
import MenuIcon from './MenuIcon';
import CloseIcon from './CloseIcon';
import { FaArrowRight } from 'react-icons/fa'; // Import the icon

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { text: 'Home', link: '#' },
        { text: 'Features', link: '#' },
        { text: 'Community', link: '#' },
        { text: 'Blog', link: '#' },
        { text: 'Pricing', link: '#' },
    ];

    return (
        <>
            {/* Menu Icon (Mobile Only) */}
            <div className="menu-icon" onClick={toggleSidebar}>
                <MenuIcon />
            </div>

            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                {/* Close Icon (Mobile Only) */}
                <div className="close-icon" onClick={toggleSidebar}>
                    <CloseIcon />
                </div>

                {/* Menu Items */}
                <nav className="sidebar__nav">
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.link}>{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Register Now Button */}
                <button className="sidebar__button">
                    Register Now <FaArrowRight />
                </button>
            </div>
        </>
    );
}

export default Sidebar;