import React from 'react';
import Button from './Button';
import '../css/Card.css'; // Assuming you have a CSS file for styling


function Card() {
    return (
        <>
            <div className='Card'>
                <img src="https://via.placeholder.com/150" alt="Placeholder" />
                <h2>Card Title</h2>
                <p>This is a description of the card. It can contain any relevant information.</p>
                <button className="btn primary">Learn More</button>
                <button className="btn secondary">Share</button>
            </div>
        </>
    )
}

export default Card;