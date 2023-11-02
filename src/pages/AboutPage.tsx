import React from 'react'
import { VolunteersSection } from '../components/HomePage/VolunteersSection'


export const AboutPage = () => {
    return (<>
        <section className="promo-primary">
            <picture>
                <source srcSet="../src/assets/img/about.jpg" media="(min-width: 992px)" />
                <img className="img--bg" src="../src/assets/img/about.jpg" alt="img" />
            </picture>
            <div className="promo-primary__description">
                <span>Donation</span>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-auto">
                        <div className="align-container">
                            <div className="align-container__item"><span className="promo-primary__pre-title">Helpo</span>
                                <h1 className="promo-primary__title">
                                    <span>Ayuda a</span><br />
                                    <span>Pueblos</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section about-us">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-xl-5">
                        <div className="img-box"><img className="img--layout" src="../src/assets/img/about_layout-reverse.png" alt="img" />
                            <div className="img-box__img"><img className="img--bg" src="../src/assets/img/about_2.png" alt="img" /></div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 offset-xl-1">
                        <div className="heading heading--primary"><span className="heading__pre-title">Sobre Nosotros</span>
                            <h2 className="heading__title"><span>Help is Our</span> <span>Main Goal</span></h2>
                        </div>
                        <p><strong>Thresher shark rudd African lungfish silverside, Red salmon rockfish grunion, garpike zebra danio king-of-the-salmon banjo catfish."</strong></p>
                        <p>Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek icefish velvet-belly shark, California halibut round stingray northern sea robin. Southern grayling trout-perch</p>
                        <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish basslet. Buri chimaera triplespine northern sea robin zingel lancetfish galjoen fish, catla wolffish, mosshead warbonnet</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="section about-us about-us--style-2 no-padding-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h4 className="about-us__subtitle">We work around the globe to save lives, defeat poverty and achieve social justice.</h4>
                        <p>Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek icefish velvet-belly shark, California halibut round stingray northern sea robin. Southern grayling trout-perchSharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata.</p>
                        <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish basslet. Buri chimaera triplespine northern </p>
                    </div>
                    <div className="col-lg-6 col-xl-5 offset-xl-1">
                        <div className="about-us__text-aside">Our Mission</div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section video-block no-padding-top">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="video-frame"><img className="img--bg" src="../src/assets/img/video_frame.png" alt="frame" /><a className="video-trigger video-frame__trigger" href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"><span className="video-frame__icon"><i className="fa fa-play" aria-hidden="true"></i></span><span className="video-frame__text">Watch our video</span></a><img className="video-frame__img-layout" src="../src/assets/img/video_frame-layout.png" alt="layout" /></div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section statistics no-padding-top">
            <div className="container">
                <div className="row margin-bottom">
                    <div className="col-12">
                        <div className="heading heading--primary heading--center"><span className="heading__pre-title">What we Do</span>
                            <h2 className="heading__title no-margin-bottom"><span>Our</span> <span>Statistics</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row offset-margin">
                    <div className="col-sm-6 col-lg-3">
                        <div className="icon-item">
                            <div className="icon-item__img"><img className="img--layout" src="../src/assets/img/icon_1.png" alt="img" /><span className="js-counter">20</span></div>
                            <div className="icon-item__text">
                                <p>Years of Experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="icon-item">
                            <div className="icon-item__img"><img className="img--layout" src="../src/assets/img/icon_2.png" alt="img" /><span className="js-counter">32</span></div>
                            <div className="icon-item__text">
                                <p>Country</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="icon-item">
                            <div className="icon-item__img"><img className="img--layout" src="../src/assets/img/icon_3.png" alt="img" /><span className="js-counter">200 </span><span>+</span></div>
                            <div className="icon-item__text">
                                <p>Thousand People Helped</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="icon-item">
                            <div className="icon-item__img"><img className="img--layout" src="../src/assets/img/icon_4.png" alt="img" /><span className="js-counter">65 </span><span>b</span></div>
                            <div className="icon-item__text">
                                <p>Dollars We Collected				</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section team">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="heading heading--primary"><span className="heading__pre-title">Team</span>
                            <h2 className="heading__title no-margin-bottom"><span>Meet</span> <span>our Team</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row margin-bottom">
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <div className="team-item team-item--rounded">
                            <ul className="team-item__socials">
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                            </ul>
                            <div className="team-item__img-holder"><img className="img--layout" src="../src/assets/img/team_1.png" alt="layout" />
                                <div className="team-item__img"><img className="img--bg" src="../src/assets/img/team_1.jpg" alt="teammate" /></div>
                            </div>
                            <div className="team-item__description">
                                <div className="team-item__name">Chris Patt</div>
                                <div className="team-item__position">Ceo/Founder</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <div className="team-item team-item--rounded">
                            <ul className="team-item__socials">
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                            </ul>
                            <div className="team-item__img-holder"><img className="img--layout" src="../src/assets/img/team_2.png" alt="layout" />
                                <div className="team-item__img"><img className="img--bg" src="../src/assets/img/team_2.jpg" alt="teammate" /></div>
                            </div>
                            <div className="team-item__description">
                                <div className="team-item__name">Mike Carter</div>
                                <div className="team-item__position">Manager</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <div className="team-item team-item--rounded">
                            <ul className="team-item__socials">
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                            </ul>
                            <div className="team-item__img-holder"><img className="img--layout" src="../src/assets/img/team_3.png" alt="layout" />
                                <div className="team-item__img"><img className="img--bg" src="../src/assets/img/team_3.jpg" alt="teammate" /></div>
                            </div>
                            <div className="team-item__description">
                                <div className="team-item__name">Bella Crusio</div>
                                <div className="team-item__position">Leader</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <div className="team-item team-item--rounded">
                            <ul className="team-item__socials">
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                            </ul>
                            <div className="team-item__img-holder"><img className="img--layout" src="../src/assets/img/team_4.png" alt="layout" />
                                <div className="team-item__img"><img className="img--bg" src="../src/assets/img/team_4.jpg" alt="teammate" /></div>
                            </div>
                            <div className="team-item__description">
                                <div className="team-item__name">Cesario Lee</div>
                                <div className="team-item__position">Founder</div>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <div className="team-item team-item--rounded">
                            <ul className="team-item__socials">
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                            </ul>
                            <div className="team-item__img-holder"><img className="img--layout" src="../src/assets/img/team_5.png" alt="layout" />
                                <div className="team-item__img"><img className="img--bg" src="../src/assets/img/team_5.jpg" alt="teammate" /></div>
                            </div>
                            <div className="team-item__description">
                                <div className="team-item__name">Ched Kurtsovski</div>
                                <div className="team-item__position">Volunteer</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <div className="team-item team-item--rounded">
                            <ul className="team-item__socials">
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                            </ul>
                            <div className="team-item__img-holder"><img className="img--layout" src="../src/assets/img/team_6.png" alt="layout" />
                                <div className="team-item__img"><img className="img--bg" src="../src/assets/img/team_6.jpg" alt="teammate" /></div>
                            </div>
                            <div className="team-item__description">
                                <div className="team-item__name">Lisa Chester</div>
                                <div className="team-item__position">Volunteer</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <div className="team-item team-item--rounded">
                            <ul className="team-item__socials">
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                            </ul>
                            <div className="team-item__img-holder"><img className="img--layout" src="../src/assets/img/team_7.png" alt="layout" />
                                <div className="team-item__img"><img className="img--bg" src="../src/assets/img/team_7.jpg" alt="teammate" /></div>
                            </div>
                            <div className="team-item__description">
                                <div className="team-item__name">Aisha Ten</div>
                                <div className="team-item__position">CEO</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <div className="team-item team-item--rounded">
                            <ul className="team-item__socials">
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                            </ul>
                            <div className="team-item__img-holder"><img className="img--layout" src="../src/assets/img/team_8.png" alt="layout" />
                                <div className="team-item__img"><img className="img--bg" src="../src/assets/img/team_8.jpg" alt="teammate" /></div>
                            </div>
                            <div className="team-item__description">
                                <div className="team-item__name">Jack Blumberg</div>
                                <div className="team-item__position">Volunteer</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center"><a className="button button--primary" href="volunteer.html">Become our volunteer</a></div>
                </div>
            </div>
        </section>
        <section className="section donors">
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
                                    <div className="donors-slider__img"><img src="../src/assets/img/donor_1.png" alt="donor" /></div>
                                </div>
                                <div className="donors-slider__item">
                                    <div className="donors-slider__img"><img src="../src/assets/img/donor_2.png" alt="donor" /></div>
                                </div>
                                <div className="donors-slider__item">
                                    <div className="donors-slider__img"><img src="../src/assets/img/donor_3.png" alt="donor" /></div>
                                </div>
                                <div className="donors-slider__item">
                                    <div className="donors-slider__img"><img src="../src/assets/img/donor_4.png" alt="donor" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="row no-gutters projects-masonry">

            <div className="col-lg-6 col-xl-8 projects-masonry__item projects-masonry__item--height-2 projects-masonry__item--horizontal">
                <div className="projects-masonry__img"></div>
                <div className="projects-masonry__text" >
                    <div className="projects-masonry__inner"><span className="projects-masonry__badge">Medicine</span>
                        <p>Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xl-8 projects-masonry__item projects-masonry__item--height-1 projects-masonry__item--primary">
                <div className="projects-masonry__img">
                    <div className="projects-masonry__inner"><span className="projects-masonry__badge" >Food</span>
                        <h3 className="projects-masonry__title"> <a href="cause-details.html">Help for Children of the East</a></h3>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xl-4 projects-masonry__item projects-masonry__item--height-2 projects-masonry__item--primary">
                <div className="projects-masonry__img">
                    <div className="projects-masonry__inner"><span className="projects-masonry__badge" >Education</span>
                        <h3 className="projects-masonry__title"> <a href="cause-details.html">Help for Children of the East</a></h3>

                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xl-8 projects-masonry__item projects-masonry__item--height-2 projects-masonry__item--horizontal">
                <div className="projects-masonry__img"></div>
                <div className="projects-masonry__text" >
                    <div className="projects-masonry__inner"><span className="projects-masonry__badge" >Education</span>
                        <h3 className="projects-masonry__title"> <a href="cause-details.html">Help for Children of the East</a></h3>

                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xl-4 projects-masonry__item projects-masonry__item--height-2 projects-masonry__item--primary">
                <div className="projects-masonry__img">
                    <div className="projects-masonry__inner"><span className="projects-masonry__badge">Medicine</span>
                        {/* <h3 className="projects-masonry__title"> <a href="cause-details.html">Helpo for Help</a></h3> */}
                        <p>Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp</p>

                    </div>
                </div>
            </div>
        </div>



    </>


    )
}
