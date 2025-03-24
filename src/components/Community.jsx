import React from 'react';
import './styles/community.css';
import { FaUsers, FaGlobe, FaComments } from 'react-icons/fa';

function Community() {
    return (
        <section className="community">
            <h2>Manage your entire community in a single system</h2>
            <p>Who is Nexcent suitable for?</p>
            <div className="community__cards">
                <div className="community__card">
                    <FaUsers className="community__icon" />
                    <h3>Membership Organizations</h3>
                    <p>Our membership management platform provides full insights about your members.</p>
                </div>
                <div className="community__card">
                    <FaGlobe className="community__icon" />
                    <h3>National Associations</h3>
                    <p>Our membership management platform provides full insights about your members.</p>
                </div>
                <div className="community__card">
                    <FaComments className="community__icon" />
                    <h3>Clubs And Groups</h3>
                    <p>Our membership management platform provides full insights about your members.</p>
                </div>
            </div>
        </section>
    );
}

export default Community;