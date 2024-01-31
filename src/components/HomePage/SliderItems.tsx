import { SliderItem } from './SliderItem'
import { sliderItems } from '../../data/sliderItems'

export const SliderItems = () => {
    return (<>
        <div className="carousel-inner">
            {
                sliderItems.map((item) => (
                    <SliderItem key={item.id} {...item} />
                ))
            }
        </div>
    </>
    )
}
