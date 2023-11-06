
import { contactEmail, phoneNumber } from '../../constants'
import { RRSSList } from '../RRSSList'
import { SliderItem } from './SliderItem'

import { blog_1 } from '../../assets/img'

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
                <div className="carousel-inner">
                    <SliderItem img={blog_1} date='15 Feb. 2023' />
                    <div className="carousel-item">
                        <img src="../src/assets/img/blog_2.png" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <button className='btn btn-primary mb-3 p-3'>Leer más</button>
                            <p>Fecha de Blog.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="../src/assets/img/blog_3.png" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <button className='btn btn-primary mb-3 p-3'>Leer más</button>
                            <p>Fecha de Blog.</p>
                        </div>
                    </div>
                </div>

                <div className="promo-pannel">
                    <a className="anchor promo-pannel__anchor" href="#about">
                        <span>Acerca De</span>
                    </a>
                    <div className="promo-pannel__video">
                        <img className="img--bg" src="../src/assets/img/video_block.jpg" alt="image" />
                        <a className="video-trigger" href="https://www.youtube.com/watch?v=_sI_Ps7JSEk">
                            <span>Mirá nuestros videos</span>
                            <i className="fa fa-play" aria-hidden="true">
                            </i>
                        </a>
                    </div>
                    <div className="promo-pannel__phones">
                        <p className="promo-pannel__title">Teléfono:</p>
                        <a className="promo-pannel__link" href={`tel:${phoneNumber}`}>
                            {phoneNumber}
                        </a>
                        <a className="promo-pannel__link" href={`tel:${phoneNumber}`}>
                            {phoneNumber}
                        </a>
                    </div>
                    <div className="promo-pannel__email">
                        <p className="promo-pannel__title">
                            Email
                        </p>
                        <a className="promo-pannel__link" href={`mailto:${contactEmail}`}>
                            {contactEmail}
                        </a>
                    </div>
                </div>

                <div className="slider__nav slider__nav--promo ">
                    <div className="promo-slider__count"></div>

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
