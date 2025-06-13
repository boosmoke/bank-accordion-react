import React from 'react';
import type { ButtonHTMLAttributes } from 'react';
import './Button.scss';

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    'aria-label'?: string;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({ children, 'aria-label': ariaLabel, type = 'button', ...props }) => {
    return (
        <button
            className="btn-secondary"
            {...props}
            type={type}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
};