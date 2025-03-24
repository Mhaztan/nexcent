import React from 'react';
import './styles/clients.css';
import client1 from '../assets/client-1.svg'; // Replace with your actual image
import client2 from '../assets/client-2.svg'; // Replace with your actual image
import client3 from '../assets/client-3.svg'; // Replace with your actual image
import client4 from '../assets/client-4.svg'; // Replace with your actual image
import client5 from '../assets/client-5.svg'; // Replace with your actual image
import client6 from '../assets/client-6.svg'; // Replace with your actual image
import client7 from '../assets/client-7.svg'; // Replace with your actual image

function Clients() {
    return (
        <section className="clients">
            <h2>Our Clients</h2>
            <p>We have been working with some Fortune 500+ clients</p>
            <div className="clients__logos">
                <img src={client1} alt="Client 1" />
                <img src={client2} alt="Client 2" />
                <img src={client3} alt="Client 3" />
                <img src={client4} alt="Client 4" />
                <img src={client5} alt="Client 5" />
                <img src={client6} alt="Client 6" />
                <img src={client7} alt="Client 7" />
            </div>
        </section>
    );
}

export default Clients;