import React from 'react';
import './styles/footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa'; // Import social media icons

function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // For smooth scrolling
        });
    };

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__section">
                    <h3>About Nexcent</h3>
                    <p>Nexcent is a platform that provides tools and resources to help you manage your community effectively.</p>
                </div>

                <div className="footer__section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="footer__section">
                    <h3>Contact Us</h3>
                    <p>Email: info@nexcent.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Address: 123 Main Street, Anytown, USA</p>
                </div>

                <div className="footer__section">
                    <h3>Follow Us</h3>
                    <div className="footer__social">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                </div>

                <div className="footer__section">
                    <h3>Subscribe to our Newsletter</h3>
                    <form className="footer__newsletter">
                        <input type="email" placeholder="Your email address" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer__bottom">
                <p>© {currentYear} Nexcent. All rights reserved.</p>
                <button className="footer__back-to-top" onClick={scrollToTop}>
                    <FaArrowUp />
                </button>
            </div>
        </footer>
    );
}

export default Footer;