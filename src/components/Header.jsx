import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import '../css/Header.css';
import logo from '../assets/logo1.png';

function Header() {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/SignUp');
    };

    const handleLogin = () => {
        navigate('/Login');
    };

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <header className='header'>
            <img
                src={logo}
                alt="Logo"
                width="40em"
                height="40em"
                style={{ cursor: 'pointer' }}
                onClick={handleLogoClick}
            />

            <div className='btnGroup'>
                <Button onClick={handleSignUp}>Sign up</Button>
                <Button onClick={handleLogin}>Login</Button>
            </div>
        </header>
    );
}

export default Header;
