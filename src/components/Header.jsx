import React from 'react';
import Button from './Button';
import '../css/Header.css'; // Assuming you have a CSS file for styling


function Header() {
    return (
        <header>
            <h1>Title</h1>
            <Button>Contact</Button>
        </header>
    );
}
export default Header;