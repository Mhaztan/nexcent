import React from 'react';
import './styles/localBusiness.css';
import localBusinessImage from '../assets/local-business-image.svg';

function LocalBusiness() {
    return (
        <section className="local-business">
            <div className="local-business__content">
                <h2>Helping a local business reinvent itself</h2>
                <p>We partner with our trusted tech advisors with full-blown client satisfaction.</p>
            </div>
            <div className="local-business__image">
                <img src={localBusinessImage} alt="Local Business" />
            </div>
        </section>
    );
}

export default LocalBusiness;