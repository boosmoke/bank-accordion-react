import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { DarkModeToggle } from './DarkMode'

describe('DarkModeToggle', () => {
    beforeEach(() => {
        document.body.classList.remove('darkmode')
    })

    it('renders the button', () => {
        render(<DarkModeToggle />)
        expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('shows "Dark Mode" by default', () => {
        render(<DarkModeToggle />)
        expect(screen.getByRole('button')).toHaveTextContent('Dark Mode')
    })

    it('toggles to dark mode and updates button text', () => {
        render(<DarkModeToggle />)
        const button = screen.getByRole('button')
        fireEvent.click(button)
        expect(document.body.classList.contains('darkmode')).toBe(true)
        expect(button).toHaveTextContent('Light Mode')
    })

    it('toggles back to light mode', () => {
        render(<DarkModeToggle />)
        const button = screen.getByRole('button')
        fireEvent.click(button) // dark mode
        fireEvent.click(button) // light mode
        expect(document.body.classList.contains('darkmode')).toBe(false)
        expect(button).toHaveTextContent('Dark Mode')
    })
})