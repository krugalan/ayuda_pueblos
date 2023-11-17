import React from 'react'
import { miniCauses } from '../../data/causes'
import { CauseComponent } from './CauseComponent'

export const CauseComponentList = () => {
    return (<>
        {
            (miniCauses.map((cause, index) => (
                <CauseComponent key={index} {...cause} />
            )))
        }
    </>
    )
}
