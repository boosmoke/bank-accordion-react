import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { AccordionGroup } from './AccordionGroup'
import React from 'react'
import { AccordionContext } from '../../contexts/AccordionContext'

function DummyAccordionButton({ label }: { label: string }) {
  // Simulate registration with context
    const context = React.useContext(AccordionContext)
    const ref = React.useRef<HTMLButtonElement>(null)
    React.useEffect(() => {
        if (ref.current && context) context.register(ref.current)
    }, [context])
    return (
        <button ref={ref}>{label}</button>
    )
}

describe('AccordionGroup', () => {
    it('renders children', () => {
        render(
            <AccordionGroup>
                <div>Child 1</div>
                <div>Child 2</div>
            </AccordionGroup>
        )
        expect(screen.getByText('Child 1')).toBeInTheDocument()
        expect(screen.getByText('Child 2')).toBeInTheDocument()
    })

    it('focuses next button on ArrowDown', () => {
        render(
            <AccordionGroup>
                <DummyAccordionButton label="First" />
                <DummyAccordionButton label="Second" />
            </AccordionGroup>
        )
        const [first, second] = screen.getAllByRole('button')
        first.focus()
        fireEvent.keyDown(first, { key: 'ArrowDown' })
        expect(document.activeElement).toBe(second)
    })

    it('focuses previous button on ArrowUp', () => {
        render(
            <AccordionGroup>
                <DummyAccordionButton label="First" />
                <DummyAccordionButton label="Second" />
            </AccordionGroup>
        )
        const [first, second] = screen.getAllByRole('button')
        second.focus()
        fireEvent.keyDown(second, { key: 'ArrowUp' })
        expect(document.activeElement).toBe(first)
    })

    it('focuses first button on Home', () => {
        render(
            <AccordionGroup>
                <DummyAccordionButton label="First" />
                <DummyAccordionButton label="Second" />
            </AccordionGroup>
        )
        const [first, second] = screen.getAllByRole('button')
        second.focus()
        fireEvent.keyDown(second, { key: 'Home' })
        expect(document.activeElement).toBe(first)
    })

    it('focuses last button on End', () => {
        render(
            <AccordionGroup>
                <DummyAccordionButton label="First" />
                <DummyAccordionButton label="Second" />
            </AccordionGroup>
        )
        const [first, second] = screen.getAllByRole('button')
        first.focus()
        fireEvent.keyDown(first, { key: 'End' })
        expect(document.activeElement).toBe(second)
    })
})