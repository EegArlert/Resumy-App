import React, { useState } from 'react'
import "../styles/collapsibleSectionCard.css"

const CollapsibleSectionCard = ({ title, addable, children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [addSection, setAddSection] = useState(1);

    const handleCollapsibleClick = () => {
        setIsOpen(!isOpen)
    }
    
    const handleAddSectionClick = (prevState) => {
        setAddSection(prevState + 1)
    }

    return (
        <div className='card-w'>
            <div className='card-header-w' onClick={handleCollapsibleClick}>
                <h3>{title}</h3>
                <button className='toggle-collapse-btn'>
                    {isOpen ? "▲" : "▼"}
                </button>
            </div>
            
            {/* collapsible content */}
            {isOpen && 
            <div className='card-content'> 
                {addable ? <button className='addable-btn'>Add More</button> : ''}
                {children} 
            </div>}
        </div>
    )
}

export default CollapsibleSectionCard