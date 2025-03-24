import React from 'react';
import './styles/quoteSection.css';
import { FaArrowLeft } from 'react-icons/fa'; // Example icon
import teslaImage from '../assets/tesla-image.svg'; // Replace with your actual image

function QuoteSection() {
    return (
        <section className="quote-section">
            <div className="quote-section__image">
                <img src={teslaImage} alt="Tesla" />
            </div>
            <div className="quote-section__content">
                <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <p className="quote-section__author">Tim Smith</p>
                <p className="quote-section__author-details">British Dragon Boat Racing Association</p>
                <div className="quote-section__clients">
                    {/* Add client logos here */}
                    <p>Meet all customers {FaArrowLeft}</p>
                </div>
            </div>
        </section>
    );
}

export default QuoteSection;