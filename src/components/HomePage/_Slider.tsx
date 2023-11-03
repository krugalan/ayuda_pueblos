import React from 'react'

export const Slider = () => {
    return (
        <>
            {/* <section className="promo">
                <div className="promo-slider">
                    <div className="promo-slider__item promo-slider__item--style-1">
                        <picture>
                            <source srcSet="../src/assets/img/promo_1.jpg" media="(min-width: 835px)" />
                            <source srcSet="../src/assets/img/834promo_1.jpg" media="(min-width: 376px)" /><img className="img--bg" src="../src/assets/img/375promo_1.jpg" alt="img" />
                        </picture>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="align-container">
                                        <div className="align-container__item">
                                            <div className="promo-slider__wrapper-1">
                                                <h2 className="promo-slider__title"><span>We help all people in need</span> <span>around the world.</span></h2>
                                            </div>
                                            <div className="promo-slider__wrapper-2">
                                                <p className="promo-slider__subtitle">Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfish</p>
                                            </div>
                                            <div className="promo-slider__wrapper-3"><a className="button promo-slider__button button--primary" href="#">Discover</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="promo-slider__item promo-slider__item--style-2">
                        <picture>
                            <source srcSet="../src/assets/img/promo_2.jpg" media="(min-width: 835px)" />
                            <source srcSet="../src/assets/img/834promo_2.jpg" media="(min-width: 376px)" /><img className="img--bg" src="../src/assets/img/375promo_2.jpg" alt="img" />
                        </picture>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-7">
                                    <div className="align-container">
                                        <div className="align-container__item">
                                            <div className="promo-slider__wrapper-1">
                                                <h2 className="promo-slider__title"><span>Our Helping</span><br /><span>around the world.</span></h2>
                                            </div>
                                            <div className="promo-slider__wrapper-2">
                                                <p className="promo-slider__subtitle">Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfish</p>
                                            </div>
                                            <div className="promo-slider__wrapper-3"><a className="button promo-slider__button button--primary" href="#">Discover</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="promo-slider__item promo-slider__item--style-3">
                        <picture>
                            <source srcSet="../src/assets/img/promo_3.jpg" media="(min-width: 835px)" />
                            <source srcSet="../src/assets/img/834promo_3.jpg" media="(min-width: 376px)" /><img className="img--bg" src="../src/assets/img/375promo_3.jpg" alt="img" />
                        </picture>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 offset-xl-2">
                                    <div className="align-container">
                                        <div className="align-container__item">
                                            <div className="promo-slider__wrapper-1">
                                                <h2 className="promo-slider__title"><span>Helpo Volounteers</span><br /><span>Around the world.</span></h2>
                                            </div>
                                            <div className="promo-slider__wrapper-2">
                                                <p className="promo-slider__subtitle">Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfish</p>
                                            </div>
                                            <div className="promo-slider__wrapper-3"><a className="button promo-slider__button button--primary" href="#">Discover</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="promo-socials">
                    <li className="promo-socials__item"><a className="promo-socials__link" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li className="promo-socials__item"><a className="promo-socials__link" href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                    <li className="promo-socials__item"><a className="promo-socials__link" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li className="promo-socials__item"><a className="promo-socials__link" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                </ul>
            </section> */}





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

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}

                <div className="promo-pannel"><a className="anchor promo-pannel__anchor" href="#about"> <span>Scroll Down</span></a>
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
