import React from 'react'
import Accordion from '../components/accordion/Accordion'
import { PrimaryButton } from '../components/buttons/PrimaryButton'
import { SecondaryButton } from '../components/buttons/SecondayButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faShield  } from '@fortawesome/free-solid-svg-icons'
import { AccordionGroup } from '../components/accordion/AccordionGroup'

function Home() {
    return (
        <>
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
                {/* <Accordion title="Betala och kopddpla bankkonto 2">
                    <div className="accordion-content">
                        <div className="info-row">
                            <FontAwesomeIcon icon={faRocket} style={{ color: '#0078d4' }} size="2x"/>
                            <p>Snabbare betalning av framtida fakturor 2.</p>
                        </div>
                        <div className="info-row">
                            <FontAwesomeIcon icon={faShield} size='2x' style={{ color: '#a0c8af' }} />
                            <p>
                            Säker koppling till din bank 2. 
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                                role="button"
                                aria-label="Läs mer om säker koppling till din bank"
                            >
                                Läs mer 2
                            </a>
                            </p>
                        </div>
                        <div className="button-group">
                            <PrimaryButton aria-label="Start mobile BankID authentication">Start mobile BankID 2</PrimaryButton>
                            <SecondaryButton aria-label="Use mobile BankID on other device">Mobile BankID on other device 2</SecondaryButton>
                        </div>
                    </div>
                </Accordion> */}
            </AccordionGroup>
        </>
    )
}

export default Home