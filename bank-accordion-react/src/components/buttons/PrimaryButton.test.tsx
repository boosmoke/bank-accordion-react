import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { vi } from 'vitest'
import { PrimaryButton } from './PrimaryButton'

describe('PrimaryButton', () => {
    it('renders children', () => {
        render(<PrimaryButton>Click me</PrimaryButton>)
        expect(screen.getByRole('button')).toHaveTextContent('Click me')
    })

    it('applies the btn-primary class', () => {
        render(<PrimaryButton>Test</PrimaryButton>)
        expect(screen.getByRole('button')).toHaveClass('btn-primary')
    })

    it('sets the type attribute', () => {
        render(<PrimaryButton type="submit">Submit</PrimaryButton>)
        expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
    })

    it('sets aria-label when provided', () => {
        render(<PrimaryButton aria-label="Special Action">Do</PrimaryButton>)
        expect(screen.getByLabelText('Special Action')).toBeInTheDocument()
    })

    it('calls onClick when clicked', () => {
        const handleClick = vi.fn()
        render(<PrimaryButton onClick={handleClick}>Click</PrimaryButton>)
        fireEvent.click(screen.getByRole('button'))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})