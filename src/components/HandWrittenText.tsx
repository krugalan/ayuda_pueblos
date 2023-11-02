import React from 'react'

type HandWrittenTextType = {
    text: string;
}

export const HandWrittenText = ({ text }: HandWrittenTextType) => {
    return (
        <div className="promo-primary__description">
            <span>{text}</span>
        </div>
    )
}
