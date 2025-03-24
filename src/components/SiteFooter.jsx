import React from 'react';
import './styles/siteFooter.css';
import designFooter from '../assets/design-footer.svg'; // Replace with your actual image

function SiteFooter() {
    return (
        <section className="site-footer">
            <div className="site-footer__content">
                <h2>How to design your site footer like we did</h2>
                <p>Donec a eros justo. Fusce egestas tristique ultricies. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo facilisis efficitur quis magna. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <button className="site-footer__button">Learn More</button>
            </div>
            <div className="site-footer__image">
                <img src={designFooter} alt="Design Footer" />
            </div>
        </section>
    );
}

export default SiteFooter;