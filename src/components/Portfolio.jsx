import React from 'react';
import Header from './Header';
import Button from './Button';
import Card from './Card';
import '../css/Porfolios.css';
import Placeholder from '../assets/placeholder_project.jpg';

function Portfolio() {
    const cards = [
        { image: Placeholder, alt: "Portfolio 1", link: "#", tag: "Minimal" },
        { image: Placeholder, alt: "Portfolio 2", link: "#", tag: "Modern" },
        { image: Placeholder, alt: "Portfolio 3", link: "#", tag: "Dark" },
        { image: Placeholder, alt: "Portfolio 4", link: "#", tag: "Creative" },
        { image: Placeholder, alt: "Portfolio 5", link: "#", tag: "Clean" },
        { image: Placeholder, alt: "Portfolio 6", link: "#", tag: "Elegant" },
    ];

    return (
        <div className="portfolio">
            <h1>Choose your Portfolio</h1>
            <p>Pick a style that suits you best. You can change it later.</p>
            <div className="portfolio-options">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        customImage={card.image}
                        customAlt={card.alt}
                        customLink={card.link}
                        tag={card.tag}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
