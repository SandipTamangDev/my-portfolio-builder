import React from 'react';
import Button from './Button';
import '../css/Header.css'; // Assuming you have a CSS file for styling
import logo from '../assets/logo.png'


function Header() {

    return (
        <header className='header'>
            <img src={logo} alt="#" width="50px" height="50px" />

            <div className='btnGroup'>
                <Button>Sign up</Button>
                <Button>Login</Button>
            </div>
        </header>
    );
}

export default Header;