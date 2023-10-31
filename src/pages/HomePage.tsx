import React from 'react'
import { Link } from 'react-router-dom'
import { promo_1 } from '../assets/img'

export const HomePage = () => {
    return (
        <div className="page-wrapper">
            <main className="main">
                <section className="promo">
                    <div className="promo-slider">
                        <div className="promo-slider__item promo-slider__item--style-1">
                            <picture>
                                <source srcSet={promo_1} media="(min-width: 835px)" />
                                <source srcSet={promo_1} media="(min-width: 376px)" />
                                <img className="img--bg" src={promo_1} alt="img" />
                            </picture>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="align-container">
                                            <div className="align-container__item">
                                                <div className="promo-slider__wrapper-1">
                                                    <h2 className="promo-slider__title"><span>We help all people in need!!!</span> <span>around the world.</span></h2>
                                                </div>
                                                <div className="promo-slider__wrapper-2">
                                                    <p className="promo-slider__subtitle">Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfish</p>
                                                </div>
                                                <div className="promo-slider__wrapper-3"><Link className="button promo-slider__button button--primary" to="#">Discover</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="promo-slider__item promo-slider__item--style-2">
                            <picture>
                                <source srcSet="img/promo_2.jpg" media="(min-width: 835px)" />
                                <source srcSet="img/834promo_2.jpg" media="(min-width: 376px)" /><img className="img--bg" src="img/375promo_2.jpg" alt="img" />
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
                                                <div className="promo-slider__wrapper-3"><Link className="button promo-slider__button button--primary" to="#">Discover</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="promo-slider__item promo-slider__item--style-3">
                            <picture>
                                <source srcSet="img/promo_3.jpg" media="(min-width: 835px)" />
                                <source srcSet="img/834promo_3.jpg" media="(min-width: 376px)" /><img className="img--bg" src="img/375promo_3.jpg" alt="img" />
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
                                                <div className="promo-slider__wrapper-3"><Link className="button promo-slider__button button--primary" to="#">Discover</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul className="promo-socials">
                        <li className="promo-socials__item"><Link className="promo-socials__link" to="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                        <li className="promo-socials__item"><Link className="promo-socials__link" to="#"><i className="fa fa-google-plus" aria-hidden="true"></i></Link></li>
                        <li className="promo-socials__item"><Link className="promo-socials__link" to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                        <li className="promo-socials__item"><Link className="promo-socials__link" to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                    </ul>

                    <div className="promo-pannel"><Link className="anchor promo-pannel__anchor" to="#about"> <span>Scroll Down</span></Link>
                        <div className="promo-pannel__video"><img className="img--bg" src="img/video_block.jpg" alt="image" /><Link className="video-trigger" to="https://www.youtube.com/watch?v=_sI_Ps7JSEk"><span>Watch our video</span><i className="fa fa-play" aria-hidden="true"></i></Link></div>
                        <div className="promo-pannel__phones">
                            <p className="promo-pannel__title">Phone numbers</p><Link className="promo-pannel__link" to="tel:+180012345678">+ 1800 - 123 456 78</Link><Link className="promo-pannel__link" to="tel:+18009756511">+ 1800 - 975 65 11</Link>
                        </div>
                        <div className="promo-pannel__email">
                            <p className="promo-pannel__title">Email</p><Link className="promo-pannel__link" to="mailto:support@helpo.org">support@helpo.org</Link>
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

                </section>

                <section className="section about-us" id="about">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="heading heading--primary"><span className="heading__pre-title">About Us</span>
                                    <h2 className="heading__title"><span>Help is Our</span> <span>Main Goal</span></h2>
                                </div>
                                <p><strong>Thresher shark rudd African lungfish silverside, Red salmon rockfish grunion, garpike zebra danio king-of-the-salmon banjo catfish."</strong></p>
                                <p>Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek icefish velvet-belly shark, California halibut round stingray northern sea robin. Southern grayling trout-perch</p>
                                <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish basslet. Buri chimaera triplespine northern sea robin zingel lancetfish galjoen fish, catla wolffish, mosshead warbonnet</p><Link className="button button--primary" to="about.html">More About</Link>
                            </div>
                            <div className="col-lg-6 col-xl-5 offset-xl-1">
                                <div className="info-box"><img className="img--layout" src="img/about_layout.png" alt="img" /><img className="img--bg" src="img/about-us.jpg" alt="img" />
                                    <h4 className="info-box__title">We are Awesome Volounteer Team</h4>
                                    <p>Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfish</p><Link className="info-box__link" to="volunteer.html">Become a volounteer</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section icons-section no-padding-top">
                    <div className="container">
                        <div className="row margin-bottom">
                            <div className="col-12">
                                <div className="heading heading--center"><span className="heading__pre-title">Services</span>
                                    <h2 className="heading__title"><span>What we do</span> <span>for all people</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <div className="icon-item">
                                    <div className="icon-item__img"><img className="img--layout" src="img/icon_1-1.png" alt="img" />
                                        <svg className="icon icon-item__icon icon--red">
                                            <use xlinkHref="#donation"></use>
                                        </svg>
                                    </div>
                                    <div className="icon-item__text">
                                        <p>Medicine Help</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="icon-item">
                                    <div className="icon-item__img"><img className="img--layout" src="img/icon_2-2.png" alt="img" />
                                        <svg className="icon icon-item__icon icon--orange">
                                            <use xlinkHref="#church"></use>
                                        </svg>
                                    </div>
                                    <div className="icon-item__text">
                                        <p>We Build and Create</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="icon-item">
                                    <div className="icon-item__img"><img className="img--layout" src="img/icon_3-3.png" alt="img" />
                                        <svg className="icon icon-item__icon icon--green">
                                            <use xlinkHref="#blood"></use>
                                        </svg>
                                    </div>
                                    <div className="icon-item__text">
                                        <p>Water Delivery</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="icon-item">
                                    <div className="icon-item__img"><img className="img--layout" src="img/icon_4-4.png" alt="img" />
                                        <svg className="icon icon-item__icon icon--blue">
                                            <use xlinkHref="#charity"></use>
                                        </svg>
                                    </div>
                                    <div className="icon-item__text">
                                        <p>We Care About</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section causes"><img className="causes__bg" src="img/causes_img.png" alt="img" />
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-xl-5">
                                <div className="heading heading--primary"><span className="heading__pre-title">What we Do</span>
                                    <h2 className="heading__title"><span>Helpo</span> <span>Causes</span></h2>
                                    <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish</p>
                                </div>
                            </div>
                            <div className="col-xl-6 offset-xl-1 d-none d-xl-block">
                                <div className="row offset-margin">
                                    <div className="col-6">
                                        <div className="counter-item counter-item--style-3">
                                            <div className="counter-item__top">
                                                <h6 className="counter-item__title">People We Helped on 2018</h6>
                                            </div>
                                            <div className="counter-item__lower"><span className="js-counter">200</span><span>k</span></div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="counter-item counter-item--style-3">
                                            <div className="counter-item__top">
                                                <h6 className="counter-item__title">Dollars We Collected</h6>
                                            </div>
                                            <div className="counter-item__lower"><span className="js-counter">65</span><span>bil</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-end margin-bottom">
                            <div className="col-sm-6"><Link className="button button--primary" to="causes.html">More Causes</Link></div>
                            <div className="col-sm-6 d-flex justify-content-sm-end">
                                <div className="slider__nav causes-slider__nav">
                                    <div className="slider__arrows">
                                        <div className="slider__prev"><i className="fa fa-chevron-left" aria-hidden="true"></i>
                                        </div>
                                        <div className="slider__next"><i className="fa fa-chevron-right" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="section projects no-padding-top no-padding-bottom">
                    <div className="container">
                        <div className="row align-items-end margin-bottom">
                            <div className="col-lg-9">
                                <div className="heading heading--primary"><span className="heading__pre-title">What we Did</span>
                                    <h2 className="heading__title"><span>Helpo</span> <span>Projects</span></h2>
                                    <p className="no-margin-bottom">Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters projects-masonry">
                        <div className="col-lg-6 col-xl-4 projects-masonry__item projects-masonry__item--height-1 projects-masonry__item--vertical">
                            <div className="projects-masonry__img"><img className="img--bg" src="img/projects_1.jpg" alt="img" /></div>

                        </div>
                        <div className="col-lg-6 col-xl-8 projects-masonry__item projects-masonry__item--height-2 projects-masonry__item--horizontal">
                            <div className="projects-masonry__img"><img className="img--bg" src="img/projects_2.jpg" alt="img" /></div>

                        </div>
                        <div className="col-lg-6 col-xl-8 projects-masonry__item projects-masonry__item--height-1 projects-masonry__item--primary">
                            <div className="projects-masonry__img"><img className="img--bg" src="img/projects_3.jpg" alt="img" />

                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 projects-masonry__item projects-masonry__item--height-2 projects-masonry__item--primary">
                            <div className="projects-masonry__img"><img className="img--bg" src="img/projects_4.jpg" alt="img" />

                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-8 projects-masonry__item projects-masonry__item--height-2 projects-masonry__item--horizontal">
                            <div className="projects-masonry__img"><img className="img--bg" src="img/projects_5.jpg" alt="img" /></div>

                        </div>
                        <div className="col-lg-6 col-xl-4 projects-masonry__item projects-masonry__item--height-2 projects-masonry__item--primary">
                            <div className="projects-masonry__img"><img className="img--bg" src="img/projects_6.jpg" alt="img" />

                            </div>
                        </div>
                    </div>
                </section>

                <section className="section events"><img className="events__bg" src="img/events_bg.png" alt="img" />
                    <div className="container">
                        <div className="row margin-bottom">
                            <div className="col-12">
                                <div className="heading heading--primary heading--center"><span className="heading__pre-title">Events</span>
                                    <h2 className="heading__title"><span>Helpo Holds</span> <span>for You</span></h2>
                                    <p className="no-margin-bottom">Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. Midshipman dartfish</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="event-item">
                                    <div className="event-item__img"><img className="img--bg" src="img/event_1.jpg" alt="img" /></div>
                                    <div className="event-item__content">
                                        <h6 className="event-item__title"><Link to="#">Help for Language. Voluanteer</Link></h6>
                                        <p><b>Dark Spurt,</b> San Francisco, CA 94528, USA</p>
                                        <p><b>September 30 - October 31,</b> 2019</p>
                                        <p><b>10:00 AM - 18:00 PM,</b> Everyday</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="event-item">
                                    <div className="event-item__img"><img className="img--bg" src="img/event_2.jpg" alt="img" /></div>
                                    <div className="event-item__content">
                                        <h6 className="event-item__title"><Link to="#">The Culture of Africa. Rebirth</Link></h6>
                                        <p><b>Dark Spurt,</b> San Francisco, CA 94528, USA</p>
                                        <p><b>September 30 - October 31,</b> 2019</p>
                                        <p><b>10:00 AM - 18:00 PM,</b> Everyday</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="event-item">
                                    <div className="event-item__img"><img className="img--bg" src="img/event_3.jpg" alt="img" /></div>
                                    <div className="event-item__content">
                                        <h6 className="event-item__title"><Link to="#">Help for Language. Voluanteer</Link></h6>
                                        <p><b>Dark Spurt,</b> San Francisco, CA 94528, USA</p>
                                        <p><b>April 15 - April 20,</b> 2019</p>
                                        <p><b>10:00 AM - 15:00 PM,</b> Everyday</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center"><Link className="button button--primary" to="#">View all events</Link></div>
                        </div>
                    </div>
                </section>

                <section className="section text-section"><img className="text-section__bg" src="img/text-section.png" alt="img" />
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2 className="text-section__heading">Volunteer</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-4 col-xl-7 offset-xl-4">
                                <h3 className="text-section__title">Delivering help and hope <br />to children through sponsorship.</h3>
                                <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish</p><Link className="button button--primary" to="#">Become a Volunteer</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section testimonials--style-2">
                    <div className="testimonials--style-2__bg jarallax">
                        <picture>
                            <source srcSet="img/testimonials_2.jpg" media="(min-width: 992px)" /><img className="jarallax-img" src="img/testimonials_2.jpg" alt="img" />
                        </picture>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="heading heading--primary"><span className="heading__pre-title">Testimonials</span>
                                    <h2 className="heading__title"><span>What People</span><br /><span>Says About Us</span></h2>
                                </div>

                                <div className="slider__nav testimonials-style-2__nav">
                                    <div className="slider__arrows">
                                        <div className="slider__prev"><i className="fa fa-chevron-left" aria-hidden="true"></i>
                                        </div>
                                        <div className="slider__next"><i className="fa fa-chevron-right" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-xl-8">
                                <div className="testimonials-slider testimonials-slider--style-2">
                                    <div className="testimonials-slider__item">
                                        <div className="testimonials-slider__icon">“</div>
                                        <div className="testimonials-slider__text">
                                            <p>Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder European minnow black dragonfish orbicular batfish stingray tenpounder! Flying characin herring, Moses sole sea snail grouper discus. European eel slender snipe eel. Gulper eel dealfish ocean sunfish; rohu yellow-and-black triplefin Atlantic saury swordfish southern sandfish Rudderfish long-finned pikerazorfish menhaden paradise fish, barramundi oceanic flyingfish. Fangtooth yellowtail banded killifish seamoth triplefin blenny desert pupfish crocodile shark catfish cutlassfish broadband dogfish whalefish.</p>
                                            <div className="testimonials-slider__author"><span className="testimonials-slider__name">Jack Wolfskin, </span><span className="testimonials-slider__position">Volunteer</span></div>
                                        </div>
                                    </div>
                                    <div className="testimonials-slider__item">
                                        <div className="testimonials-slider__icon">“</div>
                                        <div className="testimonials-slider__text">
                                            <p>Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder European minnow black dragonfish orbicular batfish stingray tenpounder! Flying characin herring, Moses sole sea snail grouper discus. European eel slender snipe eel. Gulper eel dealfish ocean sunfish; rohu yellow-and-black triplefin Atlantic saury swordfish southern sandfish Rudderfish long-finned pikerazorfish menhaden paradise fish, barramundi oceanic flyingfish. Fangtooth yellowtail banded killifish seamoth triplefin blenny desert pupfish crocodile shark catfish cutlassfish broadband dogfish whalefish.</p>
                                            <div className="testimonials-slider__author"><span className="testimonials-slider__name">Jack Wolfskin, </span><span className="testimonials-slider__position">Volunteer</span></div>
                                        </div>
                                    </div>
                                    <div className="testimonials-slider__item">
                                        <div className="testimonials-slider__icon">“</div>
                                        <div className="testimonials-slider__text">
                                            <p>Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder European minnow black dragonfish orbicular batfish stingray tenpounder! Flying characin herring, Moses sole sea snail grouper discus. European eel slender snipe eel. Gulper eel dealfish ocean sunfish; rohu yellow-and-black triplefin Atlantic saury swordfish southern sandfish Rudderfish long-finned pikerazorfish menhaden paradise fish, barramundi oceanic flyingfish. Fangtooth yellowtail banded killifish seamoth triplefin blenny desert pupfish crocodile shark catfish cutlassfish broadband dogfish whalefish.</p>
                                            <div className="testimonials-slider__author"><span className="testimonials-slider__name">Jack Wolfskin, </span><span className="testimonials-slider__position">Volunteer</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section blog"><img className="blog__bg" src="img/blog_bg.png" alt="img" />
                    <div className="container">
                        <div className="row margin-bottom">
                            <div className="col-12">
                                <div className="heading heading--primary heading--center"><span className="heading__pre-title">News</span>
                                    <h2 className="heading__title no-margin-bottom"><span>Helpo</span> <span>Blog</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row offset-margin">
                            <div className="col-md-6 col-lg-5 col-xl-4">
                                <div className="blog-item blog-item--style-1">
                                    <div className="blog-item__content">
                                        <h6 className="blog-item__title"><Link to="#">Save the Children's Role in Fight Against Malnutrition Hailed</Link></h6>
                                        <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail canthigaster</p>
                                        <div className="blog-item__details"><span className="blog-item__date">23 Jan' 19</span><span>
                                            <svg className="icon">
                                                <use xlinkHref="#comment"></use>
                                            </svg> 501</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-7 col-xl-8">
                                <div className="blog-item blog-item--style-2"><img className="img--bg" src="img/blog_2.png" alt="img" />

                                    <div className="blog-item__details"><span className="blog-item__date">23 Jan' 19</span><span>
                                        <svg className="icon">
                                            <use xlinkHref="#comment"></use>
                                        </svg> 501</span></div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-7 col-xl-8">
                                <div className="blog-item blog-item--style-2"><img className="img--bg" src="img/blog_3.png" alt="img" />

                                    <div className="blog-item__details"><span className="blog-item__date">23 Jan' 19</span><span>
                                        <svg className="icon">
                                            <use xlinkHref="#comment"></use>
                                        </svg> 501</span></div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5 col-xl-4">
                                <div className="blog-item blog-item--style-1">
                                    <div className="blog-item__content">
                                        <h6 className="blog-item__title"><Link to="#">Save the Children's Role in Fight Against Malnutrition Hailed</Link></h6>
                                        <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail canthigaster</p>
                                        <div className="blog-item__details"><span className="blog-item__date">23 Jan' 19</span><span>
                                            <svg className="icon">
                                                <use xlinkHref="#comment"></use>
                                            </svg> 501</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section donors no-padding-top">
                    <div className="container">
                        <div className="row margin-bottom">
                            <div className="col-12">
                                <div className="heading heading--primary heading--center"><span className="heading__pre-title">Donors</span>
                                    <h2 className="heading__title no-margin-bottom"><span>Who Help</span> <span>Us</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="slider-holder">
                                    <div className="donors-slider donors-slider--style-1">
                                        <div className="donors-slider__item">
                                            <div className="donors-slider__img"><img src="img/donor_1.png" alt="donor" /></div>
                                        </div>
                                        <div className="donors-slider__item">
                                            <div className="donors-slider__img"><img src="img/donor_2.png" alt="donor" /></div>
                                        </div>
                                        <div className="donors-slider__item">
                                            <div className="donors-slider__img"><img src="img/donor_3.png" alt="donor" /></div>
                                        </div>
                                        <div className="donors-slider__item">
                                            <div className="donors-slider__img"><img src="img/donor_4.png" alt="donor" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section instagram no-padding-bottom">
                    <div className="container">
                        <div className="row align-items-end margin-bottom">
                            <div className="col-md-7 col-lg-8">
                                <div className="heading heading--primary"><span className="heading__pre-title">Testimonials</span>
                                    <h2 className="heading__title no-margin-bottom"><span># helpocharity</span></h2>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-4 text-md-right">
                                <div className="slider__nav instagram-slider__nav">
                                    <div className="slider__arrows">
                                        <div className="slider__prev"><i className="fa fa-chevron-left" aria-hidden="true"></i>
                                        </div>
                                        <div className="slider__next"><i className="fa fa-chevron-right" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="instagram-slider"><Link className="instagram-slider__item" to="#"><img className="img--bg" src="img/ig_1.jpg" alt="img" /><span className="instagram-slider__icon"><i className="fa fa-instagram" aria-hidden="true"></i></span><span className="instagram-slider__icon-hover"><i className="fa fa-instagram" aria-hidden="true"></i></span></Link><Link className="instagram-slider__item" to="#"><img className="img--bg" src="img/ig_2.jpg" alt="img" /><span className="instagram-slider__icon"><i className="fa fa-instagram" aria-hidden="true"></i></span><span className="instagram-slider__icon-hover"><i className="fa fa-instagram" aria-hidden="true"></i></span></Link><Link className="instagram-slider__item" to="#"><img className="img--bg" src="img/ig_3.jpg" alt="img" /><span className="instagram-slider__icon"><i className="fa fa-instagram" aria-hidden="true"></i></span><span className="instagram-slider__icon-hover"><i className="fa fa-instagram" aria-hidden="true"></i></span></Link><Link className="instagram-slider__item" to="#"><img className="img--bg" src="img/ig_4.jpg" alt="img" /><span className="instagram-slider__icon"><i className="fa fa-instagram" aria-hidden="true"></i></span><span className="instagram-slider__icon-hover"><i className="fa fa-instagram" aria-hidden="true"></i></span></Link><Link className="instagram-slider__item" to="#"><img className="img--bg" src="img/ig_5.jpg" alt="img" /><span className="instagram-slider__icon"><i className="fa fa-instagram" aria-hidden="true"></i></span><span className="instagram-slider__icon-hover"><i className="fa fa-instagram" aria-hidden="true"></i></span></Link><Link className="instagram-slider__item" to="#"><img className="img--bg" src="img/ig_6.jpg" alt="img" /><span className="instagram-slider__icon"><i className="fa fa-instagram" aria-hidden="true"></i></span><span className="instagram-slider__icon-hover"><i className="fa fa-instagram" aria-hidden="true"></i></span></Link><Link className="instagram-slider__item" to="#"><img className="img--bg" src="img/ig_4.jpg" alt="img" /><span className="instagram-slider__icon"><i className="fa fa-instagram" aria-hidden="true"></i></span><span className="instagram-slider__icon-hover"><i className="fa fa-instagram" aria-hidden="true"></i></span></Link></div>
                </section>
            </main>

        </div>

    )
}
