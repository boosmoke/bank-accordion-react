import React from 'react'
import Accordion from '../components/accordion/Accordion'
import { PrimaryButton } from '../components/buttons/PrimaryButton'
import { SecondaryButton } from '../components/buttons/SecondayButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faShield  } from '@fortawesome/free-solid-svg-icons'
import { AccordionGroup } from '../components/accordion/AccordionGroup'
import { DarkModeToggle } from '../components/DarkMode/DarkMode'

function Home() {
    return (
        <>
            <DarkModeToggle />
            <AccordionGroup>
                <Accordion title="Betala och koppla bankkonto">
                    <div className="accordion-content">
                        <div className="info-row">
                            <FontAwesomeIcon icon={faRocket} style={{ color: '#0078d4' }} size="2x"/>
                            <p>Snabbare betalning av framtida fakturor.</p>
                        </div>
                        <div className="info-row">
                            <FontAwesomeIcon icon={faShield} size='2x' style={{ color: '#a0c8af' }} />
                            <p>
                            Säker koppling till din bank. 
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                                role="button"
                                aria-label="Läs mer om säker koppling till din bank"
                            >
                                Läs mer
                            </a>
                            </p>
                        </div>
                        <div className="button-group">
                            <PrimaryButton aria-label="Start mobile BankID authentication">Start mobile BankID</PrimaryButton>
                            <SecondaryButton aria-label="Use mobile BankID on other device">Mobile BankID on other device</SecondaryButton>
                        </div>
                    </div>
                </Accordion>
                <Accordion title="Använd en annan bank">
                    <div className="accordion-content">
                        <div className="info-row">
                            <FontAwesomeIcon icon={faRocket} style={{ color: '#0078d4' }} size="2x"/>
                            <p>Koppla in din bank.</p>
                        </div>
                        <div className="info-row">
                            <FontAwesomeIcon icon={faShield} size='2x' style={{ color: '#a0c8af' }} />
                            <p>
                            Säker migration till din bank. 
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                                role="button"
                                aria-label="Läs mer om säker migration till din bank"
                            >
                                Läs mer
                            </a>
                            </p>
                        </div>
                        <div className="button-group">
                            <PrimaryButton aria-label="Start migration">Start Migration</PrimaryButton>
                            <SecondaryButton aria-label="Read More">Read More</SecondaryButton>
                        </div>
                    </div>
                </Accordion>
            </AccordionGroup>
        </>
    )
}

export default Home