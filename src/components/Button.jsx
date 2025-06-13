import React from 'react';

function Button({ href, target, children, onClick, className = '', ...rest}) {

    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={`custom-button ${className}`}
                {...rest}
            >
                {children}
            </a>
        )
    }


    return (
        <button
            onClick={onClick}
            className={`custom-button ${className}`}

            {...rest}
        >
            {children}
        </button>
    )
}

export default Button;

