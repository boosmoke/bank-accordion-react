import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './Home'

describe('Home', () => {
    it('renders the accordion with correct title', () => {
        render(<Home />)
        expect(screen.getByRole('heading', { name: /Betala och koppla bankkonto/i })).toBeInTheDocument()
    })

    it('renders info rows with correct text', () => {
        render(<Home />)
        expect(screen.getByText(/Snabbare betalning av framtida fakturor/i)).toBeInTheDocument()
        expect(screen.getByText(/Säker koppling till din bank/i)).toBeInTheDocument()
    })

    it('renders "Läs mer" link with correct aria-label', () => {
        render(<Home />)
        const link = screen.getByLabelText(/Läs mer om säker koppling till din bank/i)
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('role', 'button')
    })

    it('renders both primary and secondary buttons', () => {
        render(<Home />)
        expect(screen.getByLabelText(/Start mobile BankID authentication/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/Use mobile BankID on other device/i)).toBeInTheDocument()
    })

    it('expands accordion and shows content when header button is clicked', () => {
        render(<Home />)
        const toggleButton = screen.getByRole('button', { name: /Betala och koppla bankkonto/i })
        fireEvent.click(toggleButton)
        expect(screen.getByText(/Snabbare betalning av framtida fakturor/i)).toBeVisible()
        expect(screen.getByText(/Säker koppling till din bank/i)).toBeVisible()
    })
})