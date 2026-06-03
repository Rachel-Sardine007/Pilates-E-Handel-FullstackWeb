import React from 'react';
import productImg from '/images/product.png';
import './About.css';

function About() {
    return ( 
        <div className='about'>
            <div className="about-content">
                <h1>About FORMA</h1>

                <h2>A modern studio rooted in movement and balance.</h2>

                <p>
                    FORMA combines mindful pilates with premium essentials
                    designed for everyday movement. Inspired by calm Nordic
                    interiors and intentional living.
                </p>
                <div className="about-image">
                    <img
                        src={productImg}
                        alt="Pilates studio"
                    />
                </div>
            </div>
        </div>
     );
}

export default About;