import React from 'react';
import './styles/pixelGrade.css';
import pixelgradeImage from '../assets/pixelgrade-image.svg';

function PixelGrade() {
    return (
        <section className="pixelgrade">
            <div className="pixelgrade__content">
                <h2>The unseen of spending three years at Pixelgrade</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam in scelerisque efficitur, libero nunc ultrices justo, nec semper dolor odio vel lacus.</p>
                <button className="pixelgrade__button">Learn More</button>
            </div>
            <div className="pixelgrade__image">
                <img src={pixelgradeImage} alt="Pixelgrade" />
            </div>
        </section>
    );
}

export default PixelGrade;