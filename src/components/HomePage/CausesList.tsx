import { Cause } from './Cause'
import { causes } from '../../data/causes'

export const CausesList = () => {
    return (
        <div className="causes-holder offset-margin">
            <div className="causes-holder__wrapper">
                <div className="causes-slider offset-margin">
                    {
                        causes.map((causa) => (
                            <Cause key={causa.id} {...causa} />

                        ))
                    }



                </div>
            </div>
        </div>
    )
}
