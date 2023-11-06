
import { contactEmail, phoneNumber } from '../../constants'
import { RRSSList } from '../RRSSList'
import { video_block } from '../../assets/img'
import { SliderItems } from './SliderItems'
import { VideoSectionBlock } from './VideoSectionBlock'

export const Slider = () => {
    return (
        <>
            <RRSSList />
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <SliderItems />

                <VideoSectionBlock />

                <div className="slider__nav slider__nav--promo ">

                    <div className="slider__arrows">

                        <button className="slider__prev bg-transparent" type='button' data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <i className="fa fa-chevron-left" aria-hidden="true">
                            </i>
                        </button>

                        <button className="slider__next bg-transparent" type='button' data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <i className="fa fa-chevron-right" aria-hidden="true">
                            </i>
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}
