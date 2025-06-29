import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import '../css/GettingStarted.css';

function GettingStarted({ className = '' }) {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/Question');  // navigate to /Question page
    };

    const handlePortfolio = () => {
        navigate('/Portfolio');  // navigate to /Question page
    };
    return (
        <section className={`getting-started ${className}`}>
        <div className="getting-started-content">
            <h1>Create a Stunning Portfolio in Minutes</h1>
            <p>No coding. No hassle. Just pick a style and you're live.</p>
            <div className="getting-started-buttons">
            <Button onClick={handleGetStarted} className="btn primary">
                Get Started
            </Button>
            <Button onClick={handlePortfolio} className="btn primary">
                Portfolios
            </Button>
            </div>
        </div>
        </section>
    );
}

export default GettingStarted;
