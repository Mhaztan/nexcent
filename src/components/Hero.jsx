import React from 'react';
import './styles/hero.css';
import heroImage from '../assets/hero-image.svg'; // Replace with your actual image
function Hero() {
    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__headline">Lessons and insights <br /> from 8 years</h1>
                <p className="hero__subheadline">Where to grow your business as a photographer site or social media?</p>
                <button className="hero__button">Register</button>
            </div>
            <div className="hero__image">
                <img src={heroImage} alt="Hero Image" />
            </div>
        </section>
    );
}

export default Hero;