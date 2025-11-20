import React from 'react';
import Button from './Button';
import '../css/Card.css';

function Card({ customImage, customAlt, customLink, tag }) {
    return (
        <div className="Card">
            <a href={customLink}>
                <div className="image-container">
                    <img src={customImage} alt={customAlt} width="100%" />
                    {tag && <span className="tag">{tag}</span>}
                </div>
            </a>
        </div>
    );
}

export default Card;