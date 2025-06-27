import React from 'react';
import Button from './Button';
import '../css/Hero.css';


function Hero({ className = '', onGetStarted }) {
    return (
        <section className={`Hero ${className}`}>
            <div className="hero-content">
                <h1>Create a Stunning Portfolio in Minutes</h1>
                <p>No coding. No hassle. Just pick a style and you're live.</p>
                <div className="hero-buttons">
                    <Button onClick={onGetStarted} className='btn primary'>Get Started</Button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
