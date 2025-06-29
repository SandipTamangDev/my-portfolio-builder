import React from 'react';
import Header from './Header';
import Button from './Button';
import Card from './Card';
import '../css/GetStartedPage.css'; // Assuming you have a CSS file for styling

function GetStartedPage() {
    return (
        <>
            <div className="portoflio">
                <h1>Choose your Portfolio</h1>
                <p>Pick a style that suits you best. You can change it later.</p>
                <div className="portfolio-options">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    );
}

export default GetStartedPage;
