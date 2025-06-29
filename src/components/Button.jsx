import React from 'react';

function Button({ children, onClick }) {
    return (
        <button onClick={onClick}>
        {children}
        </button>
    );
}

export default Button;
