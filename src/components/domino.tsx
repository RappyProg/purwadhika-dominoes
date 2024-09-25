import React from 'react'
import './domino.css'

interface dominoCard{
    left: number
    right: number
}

export const DominoCard: React.FC<dominoCard> = ({left, right}) => {
    const renderDots = (value: number) => {
        const dotPositioning = [
            [],
            ['middle'],
            ['top-left', 'bottom-right'],
            ['top-left', 'middle', 'bottom-right'],
            ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
            ['top-left', 'top-right', 'middle', 'bottom-left', 'bottom-right'],
            ['top-left', 'top-right', 'middle-left', 'middle-right', 'bottom-left', 'bottom-right']
        ]
        return dotPositioning[value].map((position, index) => (
            <div key={index} className={`dot ${position}`}></div>
        ))
    }

    return (
        <div className="domino-card">
            <div className="domino-half">{renderDots(left)}</div>
            <div className="domino-half">{renderDots(right)}</div>
        </div>
    )
}