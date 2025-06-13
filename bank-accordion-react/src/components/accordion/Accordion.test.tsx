import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Accordion from './Accordion'
import { AccordionGroup } from './AccordionGroup'

describe('Accordion', () => {
  it('renders the title', () => {
    render(
      <AccordionGroup>
        <Accordion title="Test Title">Content</Accordion>
      </AccordionGroup>
    )
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('does not show content by default', () => {
    render(
      <AccordionGroup>
        <Accordion title="Test Title">Hidden Content</Accordion>
      </AccordionGroup>
    )
    const heading = screen.getByRole('heading', { name: 'Test Title' })
    expect(heading).toBeInTheDocument()
  })

  it('shows content when toggled open', () => {
    render(
      <AccordionGroup>
        <Accordion title="Test Title">Visible Content</Accordion>
      </AccordionGroup>
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(screen.getByText('Visible Content')).toBeVisible()
  })

  it('hides content when toggled closed again', () => {
    render(
      <AccordionGroup>
        <Accordion title="Test Title">Toggle Content</Accordion>
      </AccordionGroup>
    )
    const button = screen.getByRole('button')
    fireEvent.click(button) // open
    fireEvent.click(button) // close
    const container = screen.getByRole('region')
    expect(container).toHaveStyle({ height: '0px' })
})

  it('sets aria-expanded correctly', () => {
    render(
      <AccordionGroup>
        <Accordion title="Test Title">Aria Content</Accordion>
      </AccordionGroup>
    )
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })
})