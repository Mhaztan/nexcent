// import React from 'react';
// import './styles/caringSection.css';
// import { FaArrowLeft } from 'react-icons/fa';
// import blogImage1 from '../assets/blog-image-1.svg';
// import blogImage2 from '../assets/blog-image-2.svg';
// import blogImage3 from '../assets/blog-image-3.svg';

// function CaringSection() {
//     return (
//         <section className="caring-section">
//             <h2>Caring is the new marketing</h2>
//             <p>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and let's more.</p>
//             <div className="caring-section__blogs">
//                 <div className="caring-section__blog">
//                     <img src={blogImage1} alt="Blog 1" />
//                     <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
//                     <p>Readmore {FaArrowLeft}</p>
//                 </div>
//                 <div className="caring-section__blog">
//                     <img src={blogImage2} alt="Blog 2" />
//                     <h3>What are your safeguarding responsibilities and how can you manage them?</h3>
//                     <p>Readmore {FaArrowLeft}</p>
//                 </div>
//                 <div className="caring-section__blog">
//                     <img src={blogImage3} alt="Blog 3" />
//                     <h3>Revamping the Membership Model with Triathlon Australia</h3>
//                     <p>Readmore {FaArrowLeft}</p>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default CaringSection;

import React from 'react';
import './styles/caringSection.css';
import { FaArrowRight } from 'react-icons/fa';
import blogImage1 from '../assets/blog-image-1.svg';
import blogImage2 from '../assets/blog-image-2.svg';
import blogImage3 from '../assets/blog-image-3.svg';

function CaringSection() {
    return (
        <section className="caring-section">
            <h2>Caring is the new marketing</h2>
            <p>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and let's more.</p>
            <div className="caring-section__blogs">
                <div className="caring-section__blog">
                    <img src={blogImage1} alt="Creating Streamlined Safeguarding Processes with OneRen" />
                    <div className="caring-section__blog-content">
                        <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
                        <a href="#" className="caring-section__blog-link">
                            Readmore <FaArrowRight />
                        </a>
                    </div>
                </div>

                <div className="caring-section__blog">
                    <img src={blogImage2} alt="What are your safeguarding responsibilities and how can you manage them?" />
                    <div className="caring-section__blog-content">
                        <h3>What are your safeguarding responsibilities and how can you manage them?</h3>
                        <a href="#" className="caring-section__blog-link">
                            Readmore <FaArrowRight />
                        </a>
                    </div>
                </div>

                <div className="caring-section__blog">
                    <img src={blogImage3} alt="Revamping the Membership Model with Triathlon Australia" />
                    <div className="caring-section__blog-content">
                        <h3>Revamping the Membership Model with Triathlon Australia</h3>
                        <a href="#" className="caring-section__blog-link">
                            Readmore <FaArrowRight />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CaringSection;