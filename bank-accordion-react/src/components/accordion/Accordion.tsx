import { useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import './Accordion.scss'
import { useAccordionContext } from './AccordionContext'

interface AccordionProps {
    title: ReactNode;   
    children: ReactNode; // I could have used this as a content prop instead
}

function Accordion({ title, children }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const id = useId();
    const contentRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null)
    const context = useAccordionContext()
    const toggleAccordion = () => {
        setIsOpen(prev => !prev);
    };

    useEffect(() => {
        if (isOpen && contentRef.current) {
            const scrollHeight = contentRef.current.scrollHeight;
            setHeight(scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    useLayoutEffect(() => {
        if (buttonRef.current && context) {
        context.register(buttonRef.current)
        }
    }, [context])
    
    return (
    <div className="accordion">
        <div className="wrapper">
            <div className="accordion-header">
            <h3 id={`accordion-header-${id}`}>
                <button
                    ref={buttonRef}
                    onClick={toggleAccordion}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-panel-${id}`}
                    id={`accordion-button-${id}`}
                >
                    {title}
                    <i className={`accordion-toggle fas fa-chevron-up ${isOpen ? 'open' : ''}`}/>
                </button>
            </h3>
            </div>
            <div
                className="accordion-container"
                ref={containerRef}
                id={`accordion-panel-${id}`}
                role="region"
                aria-labelledby={`accordion-header-${id}`}
                style={{
                height: isOpen ? `${height}px` : '0px',
                transition: 'height 0.4s ease',
                }}
            >
                <div className="accordion-content-wrapper" ref={contentRef}>
                    <div className="accordion-content">{children}</div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Accordion