import React from 'react';
import Button from './Button';
import '../css/Header.css'; // Assuming you have a CSS file for styling


function Header({children,alignItems, justifyContent, flexDirection}) {
    const headerStyle = {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 20px',
        display: 'flex',
        alignItems: alignItems || 'center',
        justifyContent: justifyContent || 'space-between',
        flexDirection: flexDirection || 'row',
    }

    return (
        <header style={headerStyle} className={`Header ${alignItems} ${justifyContent} ${flexDirection}`}>
            {children}
        </header>
    );
}

export default Header;