import React, { useRef } from 'react'
import './AccordionGroup.scss'
import { AccordionContext } from './AccordionContext'


interface AccordionGroupProps {
    children: React.ReactNode
}

export function AccordionGroup({ children }: AccordionGroupProps) {
    const refs = useRef<HTMLButtonElement[]>([])

    const register = (ref: HTMLButtonElement) => {
        if (ref && !refs.current.includes(ref)) {
        refs.current.push(ref)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        const currentIndex = refs.current.findIndex(ref => ref === document.activeElement)
        if (currentIndex === -1) return

        let nextIndex = currentIndex
        if (e.key === 'ArrowDown') {
            nextIndex = (currentIndex + 1) % refs.current.length
            e.preventDefault()
        } else if (e.key === 'ArrowUp') {
            nextIndex = (currentIndex - 1 + refs.current.length) % refs.current.length
            e.preventDefault()
        } else if (e.key === 'Home') {
            nextIndex = 0
            e.preventDefault()
        } else if (e.key === 'End') {
            nextIndex = refs.current.length - 1
            e.preventDefault()
        }

        refs.current[nextIndex]?.focus()
    }

    return (
        <AccordionContext.Provider value={{ register, getRefs: () => refs.current }}>
            <div className="accordion-group" onKeyDown={handleKeyDown}>{children}</div>
        </AccordionContext.Provider>
    )
}