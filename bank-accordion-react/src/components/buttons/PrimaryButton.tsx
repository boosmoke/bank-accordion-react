// PrimaryButton.tsx
import React from 'react';
import type { ButtonHTMLAttributes } from 'react';
import './Button.scss';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    'aria-label'?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, 'aria-label': ariaLabel, type = 'button', ...props }) => {
    return (
        <button
            className="btn-primary"
            {...props}
            type={type}
            aria-label={ariaLabel}
            >
            {children}
        </button>
    );
};