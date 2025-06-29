import React from 'react';
import Header from './Header';
import Button from './Button';
import Card from './Card';// Assuming you have a CSS file for styling
import '../css/Porfolios.css'

function Portfolio() {
    return (
        <>
            <div className="portfolio">
                <h1>Choose your Portfolio</h1>
                <p>Pick a style that suits you best. You can change it later.</p>
                <div className="portfolio-options">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    );
}

export default Portfolio;
