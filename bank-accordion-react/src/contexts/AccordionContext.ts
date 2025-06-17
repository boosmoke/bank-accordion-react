import { createContext, useContext } from 'react'

export const AccordionContext = createContext<{
    register: (ref: HTMLButtonElement) => void
    getRefs: () => HTMLButtonElement[]
} | null>(null)

export const useAccordionContext = () => {
    const ctx = useContext(AccordionContext)
    if (!ctx) throw new Error('Accordion must be used inside AccordionGroup')
    return ctx
}