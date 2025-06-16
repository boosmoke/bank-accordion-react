import React, { useState } from 'react'

export const DarkModeToggle: React.FC = () => {
    const [dark, setDark] = useState(false)

    React.useEffect(() => {
        if (dark) {
            document.body.classList.add('darkmode')
        } else {
            document.body.classList.remove('darkmode')
        }
    }, [dark])

    return (
        <button
            style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            padding: '12px 28px',
            background: 'linear-gradient(90deg, #a89f91 0%, #e0c3a3 100%)',
            color: '#2d2d2d',
            border: 'none',
            borderRadius: '24px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'background 0.3s, box-shadow 0.3s',
            zIndex: 1000,
        }}
            onClick={() => setDark(d => !d)}
        >
            {dark ? 'Light Mode' : 'Dark Mode'}
        </button>
    )
}