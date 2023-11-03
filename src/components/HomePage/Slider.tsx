import React from 'react'
import { contactEmail, phoneNumber } from '../../constants'

export const Slider = () => {
    return (
        <>
            <section className="promo">

                <ul className="promo-socials">
                    <li className="promo-socials__item"><a className="promo-socials__link" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li className="promo-socials__item"><a className="promo-socials__link" href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                    <li className="promo-socials__item"><a className="promo-socials__link" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li className="promo-socials__item"><a className="promo-socials__link" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                </ul>
            </section>





            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="../src/assets/img/blog_1.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <button className='btn btn-primary mb-3 p-3'>Leer más</button>
                            <p>Fecha de Blog.</p>
                        </div>
                    </div>
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
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}

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
                {/* <div className="promo-pannel"><a className="anchor promo-pannel__anchor" href="#about"> <span>Scroll Down</span></a>
                    <div className="promo-pannel__video"><img className="img--bg" src="../src/assets/img/video_block.jpg" alt="image" /><a className="video-trigger" href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"><span>Watch our video</span><i className="fa fa-play" aria-hidden="true"></i></a></div>
                    <div className="promo-pannel__phones">
                        <p className="promo-pannel__title">Phone numbers</p><a className="promo-pannel__link" href="tel:+180012345678">+ 1800 - 123 456 78</a><a className="promo-pannel__link" href="tel:+18009756511">+ 1800 - 975 65 11</a>
                    </div>
                    <div className="promo-pannel__email">
                        <p className="promo-pannel__title">Email</p><a className="promo-pannel__link" href="mailto:support@helpo.org">support@helpo.org</a>
                    </div>
                </div>

                <div className="slider__nav slider__nav--promo">
                    <div className="promo-slider__count"></div>
                    <div className="slider__arrows">
                        <div className="slider__prev"><i className="fa fa-chevron-left" aria-hidden="true"></i>
                        </div>
                        <div className="slider__next"><i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}
